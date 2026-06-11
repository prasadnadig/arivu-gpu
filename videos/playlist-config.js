// ═══════════════════════════════════════════════════════════════════════════
// PLAYLIST CONFIG — edit this file to change video order, titles, and media.
// Open playlist/index.html and point it at this config file.
// Reorder, add, or remove entries in `items` to change the playlist.
// ═══════════════════════════════════════════════════════════════════════════

const PLAYLIST_CONFIG = {
  title: "Demystifying GPUs",
  subtitle:
    "A guided playlist from GPU fundamentals to hardware deep dives, hands-on concepts, and evaluation.",
  // Path from playlist/index.html to this folder (where .mp4 and thumbnails live)
  mediaBase: "../videos/",
  items: [
    {
      video: "Demystifying GPUs - GPU Fundamentals for AI.mp4",
      thumbnail: "thumbnail - GPU Fundamentals for AI.png",
      title: "GPU Fundamentals for AI",
      description:
        "Start here — core GPU concepts every AI engineer should know before diving into hardware specifics.",
    },
    {
      video: "Demystifying GPUs - Inside RTX 5090.mp4",
      thumbnail: "thumbnail - Inside RTX 5090 GPU.png",
      title: "Inside RTX 5090",
      description:
        "A deep dive into NVIDIA's RTX 5090 architecture, memory, and what makes it tick.",
    },
    {
      video: "Demystifying GPUs - Inside Nvidia H200.mp4",
      thumbnail: "thumbnail -  Inside Nvidia H200 GPU.png",
      title: "Inside Nvidia H200",
      description:
        "Explore the H200 datacenter GPU — design choices, bandwidth, and AI workload fit.",
    },
    {
      video: "Demystifying GPUs - Underscoring core concepts with A100 & RTX 3090 GPUs.mp4",
      thumbnail: "thumbnail - Underscoring core concepts with A100 & RTX 3090 GPUs.png",
      title: "Core Concepts with A100 & RTX 3090",
      description:
        "Reinforce parallelization and memory concepts using A100 and RTX 3090 as concrete examples.",
    },
    {
      video: "Demystifying GPUs - Underscoring concepts with RTX 5090 & H200 GPUs.mp4",
      thumbnail: "thumbnail - Underscoring concepts with RTX 5090 & H200 GPUs.png",
      title: "Concepts with RTX 5090 & H200",
      description:
        "Apply the same core ideas to the latest consumer and datacenter GPUs side by side.",
    },
    {
      video: "Demystifying GPUs - Comparing & Evaluating  GPUs.mp4",
      thumbnail: "thumbnail - Comparing & Evaluating  GPUs.png",
      title: "Comparing & Evaluating GPUs",
      description:
        "Wrap up with a practical framework for comparing and evaluating GPUs for your workloads.",
    },
  ],
};
