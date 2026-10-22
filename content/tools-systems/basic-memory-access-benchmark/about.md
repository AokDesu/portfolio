# Basic memory access benchmark

A low-level systems benchmark in modern C++ evaluating memory access latency and cache efficiency when traversing a 128 MB heap buffer. The study compares raw pointer (`char*`) traversal against C++ smart pointer (`std::unique_ptr<char[]>`) using a 64-byte stride to match CPU L1/L2 cache line boundaries, quantitatively verifying C++'s zero-cost abstraction principle.

## Stack
- **Language**: C++20
- **Compiler**: GCC (`-O3` optimization)
- **Benchmarking**: POSIX Bash, `std::chrono::high_resolution_clock`

## Team
- **Type**: Solo Project
- **Author**: Aekarut Phetpradit

## Links
- **Source Code**: [GitHub Repository (AokDesu/Basic-memory-access-benchmark)](https://github.com/AokDesu/Basic-memory-access-benchmark)

## Image Production
- `01-benchmark-run.png`: Recorded compilation and execution of `bechmark.sh`. ImageMagick crop of the existing capture: 860×484 at x=70, y=83, retaining the terminal window only and removing surrounding dark padding. This refresh did not re-run the benchmark.
- `02-performance-chart.png`: Results card: average execution times (23.0 ms vs 32.7 ms) and throughput (5,576 MB/s vs 3,911 MB/s) over 10 runs. ImageMagick crop of the existing image: 900×516 at x=50, y=67, the card's own bounds, removing the surrounding dark padding.
