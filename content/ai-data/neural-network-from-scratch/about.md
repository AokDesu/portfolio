# Neural Network From Scratch

A deep learning neural network built entirely from scratch in modern C++ with zero external machine learning libraries, designed to demonstrate the direct connection between linear algebra fundamentals and backpropagation. The system includes a custom matrix mathematics engine, activation functions (Leaky ReLU, Softmax), cross-entropy loss calculation, and trains on the MNIST dataset of 70,000 handwritten digits.

## Stack
- **Language**: C++20
- **Build System**: CMake (Release mode: `-O3 -march=native -flto`)
- **Dataset**: MNIST handwritten digit database (IDX binary format)

## Team
- **Type**: Solo Project (Linear Algebra Coursework, KMUTT)
- **Author**: Aekarut Phetpradit

## Links
- **Source Code**: [GitHub Repository (AokDesu/Neural-Network-From-Scratch)](https://github.com/AokDesu/Neural-Network-From-Scratch)

## Image Production
- `01-training-output.png`: Live terminal output capture of the Release build compiling and running the training loop, successfully achieving 92.23% accuracy on 10,000 test images.
- `02-architecture-and-accuracy.png`: Network topology diagram (784 → 256 → 128 → 10) and performance benchmark card rendered from verified execution metrics.
