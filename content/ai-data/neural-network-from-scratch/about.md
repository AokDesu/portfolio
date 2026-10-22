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
- `01-training-output.png`: Recorded Release-build training output, showing 92.23% accuracy on 10,000 test images. ImageMagick crop of the existing capture: 860×402 at x=70, y=124, retaining the terminal window only and removing surrounding dark padding. This refresh did not re-run training.
- `02-architecture-and-accuracy.png`: Network topology (784 → 256 → 128 → 10) and results card rendered from the recorded run's metrics. ImageMagick crop of the existing image: 900×474 at x=50, y=88, the card's own bounds, removing the surrounding dark padding.
