const fibonacci = (n, sequence = [0, 1]) => {
    if (sequence.length >= n) return sequence.slice(0, n);
    return fibonacci(n, [...sequence, sequence.at(-1) + sequence.at(-2)]);
};

// Contoh penggunaan dan sudah di coba di console:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
