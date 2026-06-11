# NotebookLM Video Prompt: NVIDIA H200 Deep Dive

Use the attached NVIDIA H200 whitepaper and the attached markdown source document as the only sources. Create a chapter-by-chapter educational video that follows the same flow as the markdown document, from the overview to the recap, without skipping any chapter.

The video should be clear, calm, and beginner-friendly. Use a dark background throughout, with high-contrast light text, clean layout, and easy-to-understand visuals. Where technical ideas appear, show simple diagrams, callouts, and step-by-step illustrations that make the concepts intuitive for a newcomer.

Follow the document’s chapter order closely:
- Start with what the H200 is and why it matters.
- Explain CPUs, GPUs, and why data center GPUs are different.
- Cover the H200’s key specifications and its Hopper-based architecture.
- Show the difference between the chip, package, and module.
- Explain the compute structure: SMs, registers, shared memory, L2 cache, HBM3e, and NVLink.
- Introduce precision modes, tensor performance, and why lower precision helps AI.
- Explain how multi-GPU scaling works.
- Show why the H200 is especially strong for LLM training and inference.
- Walk through GEMM step by step.
- Explain how H200 handles backpropagation and training.
- Finish with a practical LLM example, CPU vs H200 roles, and a clear recap.

For visuals:
- Use dark-mode slides and simple animated diagrams.
- Add clear pictures or diagrams wherever they help understanding, such as:
  - H200 module renders.
  - Memory hierarchy diagrams.
  - SM block diagrams.
  - Warp/thread illustrations.
  - Matrix tiling and GEMM flow diagrams.
  - Forward and backward pass diagrams.
  - NVLink multi-GPU diagrams.
- Keep visuals educational and uncluttered.
- Prefer explanatory graphics over flashy effects.

Important content requirements:
- Use only authoritative facts from the attached NVIDIA whitepaper and the attached markdown file.
- Define every acronym when first introduced.
- Emphasize the key H200 facts: 141 GB HBM3e, 4.8 TB/s bandwidth, Hopper architecture, Tensor Cores, and NVLink.
- Explain why these specifications matter for large language models.
- Make the matrix multiplication and backpropagation sections especially clear, using simple examples and gradual reveals.

If the content is too long for one video, split it into multiple video parts while preserving chapter order. For example:
- Part 1: Overview, architecture, and memory hierarchy.
- Part 2: Precision, NVLink, and LLM advantages.
- Part 3: GEMM, backpropagation, and training examples.

Keep the narration educational and steady in tone, as if teaching a newcomer step by step. Do not add marketing language. Do not add tool branding or unrelated commentary. Use male voice.

The final video should feel like a coherent visual lesson that matches the source document chapter by chapter, with the same progression of ideas and enough visual support to make the H200 easy to understand.
