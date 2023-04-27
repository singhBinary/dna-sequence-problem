// TypeScript function to find all 10-letter-long sequences that occur more than once in a DNA molecule
function dnaSequence(s: string): string[] {
    // Initialize an empty map to store the count of each 10-letter-long sequence
    const sequenceCount: Map<string, number> = new Map();

    // Initialize an empty array to store the repeated sequences
    const repeatedSequences: string[] = [];

    // Iterate through the DNA sequence, considering substrings of length 10
    for (let i = 0; i <= s.length - 10; i++) {
        // Extract a 10-letter-long substring
        const sequence = s.substr(i, 10);

        // Get the count of the current sequence from the map
        const count = sequenceCount.get(sequence) || 0;

        // If the count is 1, it means the sequence has already occurred once, so add it to the repeatedSequences array
        if (count === 1) {
            repeatedSequences.push(sequence);
        }

        // Update the sequence count in the map
        sequenceCount.set(sequence, count + 1);
    }

    // Return the array containing the repeated sequences
    return repeatedSequences;
}

// Test cases
const testCases: [string, string[]][] = [
    ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC", "CCCCCAAAAA"]],
    ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
    ["ACGAATTCCGACGAATTCCG", ["ACGAATTCCG"]],
    ["ACGTACGTACGTACGT", ["ACGTACGTAC", "CGTACGTACG", "GTACGTACGT"]],
    ["ACTAAAG", []]
];

// Iterate through test cases and check if the function produces the expected output
testCases.forEach(([input, expectedOutput], index) => {
    const result = dnaSequence(input);
    console.log(`Test case ${index + 1}:`);
    console.log(`Input: ${input}`);
    console.log(`Expected output: ${JSON.stringify(expectedOutput)}`);
    console.log(`Actual output: ${JSON.stringify(result)}`);
    console.log(`Pass: ${JSON.stringify(result) === JSON.stringify(expectedOutput)}\n`);
});
