# RTX 5090 Deep Dive – How a GPU Works

## Slide 1 – Title & Overview

**Title:** Inside the RTX 5090: How a GPU Really Works  
**Goal:** Set context and explain what the viewer will learn.

**Talking points:**
- Introduce the NVIDIA GeForce RTX 5090 as a concrete, real-world GPU example.
- Explain that the video will walk through how a GPU works internally using this card.
- Emphasize that no prior GPU background is required.
- Outline the sections: chip vs card, memory hierarchy, SMs, warps, threads, and a matrix multiplication walkthrough.

**Visuals:**
- Dark-mode title slide.
- Clean image or diagram of an RTX 5090 card.

---

## Slide 2 – Why GPUs Exist (CPU vs GPU)
 
**Title:** Why Do We Need GPUs? CPU vs GPU

**Talking points:**
- Define CPU (Central Processing Unit) as the general-purpose “brain” of the computer.
- Define GPU (Graphics Processing Unit) as a processor designed for massively parallel work.
- CPU: few powerful cores, optimized for low-latency, branchy code.
- GPU: many simpler cores, optimized for high-throughput, parallel workloads.
- Introduce the idea that GPUs are ideal for tasks like graphics, matrix math, and AI.

**Visuals:**
- Side-by-side block diagram: CPU with a few big cores vs GPU with many small SM blocks.
- Simple “task map” labels showing examples of CPU-friendly vs GPU-friendly workloads.

---

## Slide 3 – Meet the RTX 5090

**Title:** The RTX 5090 at a Glance

**Talking points:**
- Introduce RTX 5090 as a flagship GeForce GPU based on NVIDIA’s Blackwell architecture.
- Describe it as a PCIe card used in high-end desktops and workstations.
- Mention high-level specs: many CUDA cores, 32 GB GDDR7 VRAM, very high memory bandwidth (exact values pulled from whitepaper).
- Explain that RTX 5090 is optimized for gaming, graphics, and local AI workloads.

**Visuals:**
- Photo/diagram of the RTX 5090 card from the whitepaper or official materials.
- Callouts for: PCIe connector, cooler, power connector(s), display outputs, VRAM chips.

---

## Slide 4 – Chip vs Card

**Title:** Chip vs Card: What’s the Difference?

**Talking points:**
- Define the GPU “chip” (die): the piece of silicon with transistors (SMs, caches, controllers).
- Define the GPU “card” (board): the full product including the chip, VRAM, power delivery, cooling, and connectors.
- Explain why this distinction matters: the chip is the compute engine; the card is how you integrate it into a system.
- Highlight that the RTX 5090 card uses one Blackwell GPU die plus many supporting components.

**Visuals:**
- Diagram showing a PCB with the chip in the center and memory chips around it.
- Zoom-in illustration: card-level view vs die-level view.

---

## Slide 5 – The Big Picture: GPU Internal Block Diagram

**Title:** High-Level GPU Architecture

**Talking points:**
- Show a simplified block diagram of the RTX 5090’s internal architecture.
- Introduce major components:
  - Streaming Multiprocessors (SMs).
  - L2 cache.
  - Memory controllers.
  - GDDR7 VRAM.
- Emphasize that the GPU is a collection of many SMs connected to a shared memory system.

**Visuals:**
- High-level block diagram adapted from RTX 5090 / Blackwell whitepaper:
  - Central core area with SM clusters.
  - Ring or bus of L2 cache and memory controllers.
  - GDDR7 memory around the die.

---

## Slide 6 – VRAM: The GPU’s Working Memory

**Title:** VRAM and Memory Bandwidth

**Talking points:**
- Define VRAM (Video Random Access Memory) as the GPU’s dedicated memory.
- Explain that VRAM stores:
  - Textures, frame buffers, model parameters, activations, and intermediate data.
- Discuss why both **capacity** and **bandwidth** matter:
  - Capacity determines how big models/datasets can fit.
  - Bandwidth determines how fast data can be fed to SMs.
- Use RTX 5090’s VRAM size and GDDR7 bandwidth as concrete examples (values from whitepaper).

**Visuals:**
- Diagram highlighting VRAM chips on the RTX 5090 card.
- Simple chart comparing VRAM capacity and bandwidth vs previous-gen GPUs.

---

## Slide 7 – The Memory Hierarchy

**Title:** GPU Memory Hierarchy: From Registers to VRAM

**Talking points:**
- Introduce the memory hierarchy layers:
  - Registers (per-thread storage).
  - Shared memory / LDS (per-SM scratchpad).
  - L1 cache (per-SM or per-subgroup).
  - L2 cache (shared across SMs).
  - VRAM (GDDR7).
- Explain the tradeoff:
  - Closer to the SM = faster but smaller.
  - Farther away = larger but slower.
- Explain that effective GPU programming tries to reuse data in registers and shared memory before going back to VRAM.

**Visuals:**
- Ladder diagram showing hierarchy: Registers → Shared/L1 → L2 → VRAM.
- Annotate typical latencies or relative speeds (qualitative, not exact cycles).

---

## Slide 8 – Streaming Multiprocessors (SMs)

**Title:** Streaming Multiprocessors (SMs): The Workhorses

**Talking points:**
- Define an SM (Streaming Multiprocessor) as the core execution unit in the GPU.
- Explain that each SM contains:
  - CUDA cores (integer/FP ALUs).
  - Tensor cores (for matrix math).
  - Load/store units (for memory operations).
  - Warp schedulers.
  - Registers and shared memory.
- Mention how many SMs the RTX 5090 has (from whitepaper), and how all SMs together provide massive parallelism.

**Visuals:**
- SM-level block diagram (adapted from RTX/Blackwell documentation).
- Highlight key sub-blocks: ALUs, Tensor cores, warp schedulers, register file, shared memory.

---

## Slide 9 – Threads, Blocks, and Warps

**Title:** Threads, Blocks, and Warps

**Talking points:**
- Define a **thread** as the smallest unit of execution on the GPU.
- Define a **block** (thread block) as a group of threads that can cooperate via shared memory.
- Define a **warp** as a fixed-size group of threads (e.g., 32) that execute the same instruction together (SIMT).
- Explain that warps are what the SM scheduler actually issues to the execution units.
- Clarify that SIMT (Single Instruction, Multiple Threads) means one instruction is applied across multiple threads in a warp.

**Visuals:**
- Diagram showing:
  - Many threads → grouped into blocks → each block broken into warps.
- Warp diagram: 32 “lanes” executing in lockstep.

---

## Slide 10 – SIMT Execution Model

**Title:** SIMT: Single Instruction, Multiple Threads

**Talking points:**
- Reiterate SIMT: a single instruction is issued to a warp, and each thread in the warp executes it on its own data.
- Explain how divergence (if/else in threads) can reduce efficiency.
- Emphasize that RTX 5090 and other NVIDIA GPUs use SIMT as the fundamental execution model.
- Connect to the idea that matrix operations are ideal because all threads often perform the same operation on different data.

**Visuals:**
- SM-level diagram showing warp schedulers issuing the same ADD/MUL instruction to all lanes in a warp.
- Simple animation/static sequence: one instruction applied across many data elements.

---

## Slide 11 – Data Movement: From VRAM to Registers

**Title:** How Data Moves Through the GPU

**Talking points:**
- Describe the path data takes:
  - Stored in VRAM (GDDR7).
  - Fetched via memory controllers into L2 cache.
  - Forwarded to L1/shared memory and then into registers.
- Explain the role of Load/Store (LD/ST) units in moving data between memory levels and registers.
- Emphasize that good performance depends on:
  - Coalesced memory accesses.
  - Reusing data in shared memory and registers.
  - Minimizing trips to VRAM.

**Visuals:**
- Flow diagram showing:
  - VRAM → L2 → L1/shared memory → registers → ALUs/Tensor cores → back to memory.
- Highlight LD/ST units as the “pipes” moving data.

---

## Slide 12 – Example Workload: Matrix Multiplication (Overview)

**Title:** Matrix Multiplication on the GPU (High-Level)

**Talking points:**
- Introduce matrix multiplication as a core operation in graphics and AI (e.g., GEMM).
- Explain that GPUs are excellent at this because:
  - The same operation (multiply-accumulate) is repeated many times.
  - The data layout can be tiled and distributed across SMs and threads.
- Set up the idea that we will walk through how a large matrix multiplication is broken down for the RTX 5090.

**Visuals:**
- Simple 2D matrices A and B being multiplied to produce C.
- Highlight rows of A and columns of B.

---

## Slide 13 – Matrix Multiplication: Tiling and Parallelism

**Title:** Tiling the Work Across SMs

**Talking points:**
- Explain tiling:
  - The big matrices are divided into smaller tiles.
  - Each tile is assigned to a thread block (and thus to one or more warps on an SM).
- Describe how:
  - Each block loads a tile of A and B into shared memory.
  - Threads cooperate to compute a tile of C.
- Emphasize that many tiles are processed in parallel on different SMs.

**Visuals:**
- Diagram showing a large matrix broken into tiles.
- Highlight a single tile assigned to one SM/thread block.

---

## Slide 14 – Matrix Multiplication: Inside the SM

**Title:** Inside the SM: Registers, Shared Memory, and Tensor Cores

**Talking points:**
- Walk through what happens inside one SM:
  - Threads load portions of A and B tiles from VRAM into shared memory.
  - Each thread then loads data from shared memory into registers.
  - Tensor cores or ALUs perform repeated fused multiply-add (FMA) operations.
  - Partial results are accumulated in registers and then written back to shared memory or directly to global memory.
- Explain how shared memory reduces repeated VRAM accesses and improves bandwidth usage.

**Visuals:**
- SM-level diagram showing:
  - Shared memory as a tile buffer.
  - Tensor cores/ALUs consuming data from registers.
  - Warps executing the multiply-accumulate loops.

---

## Slide 15 – Scaling Up: Many Warps, Many SMs

**Title:** Massive Parallelism: Many Warps, Many SMs

**Talking points:**
- Explain that hundreds or thousands of warps across all SMs are working simultaneously.
- Describe how:
  - Different warps handle different rows/columns/tiles of the matrices.
  - The GPU scheduler keeps SMs busy by issuing warps whenever data and resources are ready.
- Emphasize that this is how GPUs achieve high throughput: not one fast core, but many cores working in parallel.

**Visuals:**
- Diagram showing multiple SMs, each working on different tiles.
- Visual overlay of warps assigned to tiles across the matrix.

---

## Slide 16 – Why GPUs Are So Fast for AI and Math

**Title:** Why GPUs Excel at Parallel Compute

**Talking points:**
- Summarize the core reasons:
  - Many SMs and warps provide massive parallelism.
  - High-bandwidth VRAM (GDDR7) keeps data flowing.
  - Hierarchical memory (registers, shared, caches) enables data reuse.
  - Tensor cores accelerate matrix operations directly.
- Connect back to RTX 5090:
  - It combines all these elements to accelerate graphics and AI workloads.

**Visuals:**
- Summary graphic showing:
  - SMs + memory hierarchy + VRAM + Tensor cores.
- Simple list of “design choices → performance benefits.”

---

## Slide 17 – Quick CPU vs GPU Comparison (Optional)

**Title:** CPU vs GPU: Different Strengths

**Talking points:**
- Briefly contrast:
  - CPU: fewer, more complex cores, strong single-thread performance.
  - GPU: many simpler cores, strong multi-thread throughput.
- Explain that for serial control-heavy tasks, CPUs win; for dense numeric tasks like matrix math, GPUs win.

**Visuals:**
- Simplified comparison table showing when to choose CPU vs GPU.

---

## Slide 18 – Recap and Mental Model

**Title:** Recap: Your Mental Model of a GPU

**Talking points:**
- Recap the key concepts:
  - Chip vs card.
  - VRAM and memory bandwidth.
  - Memory hierarchy: registers, shared memory, caches.
  - SMs, warps, threads, SIMT.
  - Matrix multiplication as a core example workload.
- Encourage viewers to think of the GPU as:
  - A “matrix machine” with many small workers (threads) coordinated in warps, fed by a carefully layered memory system.

**Visuals:**
- Concept map connecting all main concepts discussed.