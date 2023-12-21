import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export const Popularity: { [x: string]: "HIGH" | "MEDIUM" | "LOW" } = {
    HIGH: "HIGH",
    MEDIUM: "MEDIUM",
    LOW: "LOW",
};

export type Popularity = (typeof Popularity)[keyof typeof Popularity];

export const Difficulty: { [x: string]: "EASY" | "MEDIUM" | "HARD" } = {
    EASY: "EASY",
    MEDIUM: "MEDIUM",
    HARD: "HARD",
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];

const leetcodeProblems = [
    {
        title: "Contains Duplicate",
        questionURL: "https://leetcode.com/problems/contains-duplicate",
        solutionURL:
            "https://leetcode.com/problems/contains-duplicate/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Missing Number",
        questionURL: "https://leetcode.com/problems/missing-number",
        solutionURL:
            "https://leetcode.com/problems/missing-number/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays", "Bit Manipulation"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find All Numbers Disappeared in an Array",
        questionURL:
            "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",
        solutionURL:
            "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Single Number",
        questionURL: "https://leetcode.com/problems/single-number",
        solutionURL:
            "https://leetcode.com/problems/single-number/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays", "Bit Manipulation"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Product of Array Except Self",
        questionURL:
            "https://leetcode.com/problems/product-of-array-except-self",
        solutionURL:
            "https://leetcode.com/problems/product-of-array-except-self/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Find the Duplicate Number",
        questionURL: "https://leetcode.com/problems/find-the-duplicate-number",
        solutionURL:
            "https://leetcode.com/problems/find-the-duplicate-number/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays", "Binary Search", "Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Find All Duplicates in an Array",
        questionURL:
            "https://leetcode.com/problems/find-all-duplicates-in-an-array",
        solutionURL:
            "https://leetcode.com/problems/find-all-duplicates-in-an-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Set Matrix Zeroes",
        questionURL: "https://leetcode.com/problems/set-matrix-zeroes",
        solutionURL:
            "https://leetcode.com/problems/set-matrix-zeroes/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Spiral Matrix",
        questionURL: "https://leetcode.com/problems/spiral-matrix",
        solutionURL:
            "https://leetcode.com/problems/spiral-matrix/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Rotate Image",
        questionURL: "https://leetcode.com/problems/rotate-image",
        solutionURL:
            "https://leetcode.com/problems/rotate-image/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Word Search",
        questionURL: "https://leetcode.com/problems/word-search",
        solutionURL:
            "https://leetcode.com/problems/word-search/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "First Missing Positive",
        questionURL: "https://leetcode.com/problems/first-missing-positive",
        solutionURL:
            "https://leetcode.com/problems/first-missing-positive/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Longest Consecutive Sequence",
        questionURL:
            "https://leetcode.com/problems/longest-consecutive-sequence",
        solutionURL:
            "https://leetcode.com/problems/longest-consecutive-sequence/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Letter Case Permutation",
        questionURL: "https://leetcode.com/problems/letter-case-permutation",
        solutionURL:
            "https://leetcode.com/problems/letter-case-permutation/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Subsets",
        questionURL: "https://leetcode.com/problems/subsets",
        solutionURL:
            "https://leetcode.com/problems/subsets/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Subsets II",
        questionURL: "https://leetcode.com/problems/subsets-ii",
        solutionURL:
            "https://leetcode.com/problems/subsets-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Permutations",
        questionURL: "https://leetcode.com/problems/permutations",
        solutionURL:
            "https://leetcode.com/problems/permutations/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Permutations II",
        questionURL: "https://leetcode.com/problems/permutations-ii",
        solutionURL:
            "https://leetcode.com/problems/permutations-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Combinations",
        questionURL: "https://leetcode.com/problems/combinations",
        solutionURL:
            "https://leetcode.com/problems/combinations/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Combination Sum",
        questionURL: "https://leetcode.com/problems/combination-sum",
        solutionURL:
            "https://leetcode.com/problems/combination-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Combination Sum II",
        questionURL: "https://leetcode.com/problems/combination-sum-ii",
        solutionURL:
            "https://leetcode.com/problems/combination-sum-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Combination Sum III",
        questionURL: "https://leetcode.com/problems/combination-sum-iii",
        solutionURL:
            "https://leetcode.com/problems/combination-sum-iii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Generate Parentheses",
        questionURL: "https://leetcode.com/problems/generate-parentheses",
        solutionURL:
            "https://leetcode.com/problems/generate-parentheses/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Target Sum",
        questionURL: "https://leetcode.com/problems/target-sum",
        solutionURL:
            "https://leetcode.com/problems/target-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking", "DFS", "Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Palindrome Partitioning",
        questionURL: "https://leetcode.com/problems/palindrome-partitioning",
        solutionURL:
            "https://leetcode.com/problems/palindrome-partitioning/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Letter Combinations of a Phone Number",
        questionURL:
            "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
        solutionURL:
            "https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Sudoku Solver",
        questionURL: "https://leetcode.com/problems/sudoku-solver",
        solutionURL:
            "https://leetcode.com/problems/sudoku-solver/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "N-Queens",
        questionURL: "https://leetcode.com/problems/n-queens",
        solutionURL:
            "https://leetcode.com/problems/n-queens/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Climbing Stairs",
        questionURL: "https://leetcode.com/problems/climbing-stairs",
        solutionURL:
            "https://leetcode.com/problems/climbing-stairs/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "House Robber",
        questionURL: "https://leetcode.com/problems/house-robber",
        solutionURL:
            "https://leetcode.com/problems/house-robber/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Best Time to Buy and Sell Stock",
        questionURL:
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
        solutionURL:
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Greedy"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Maximum Subarray",
        questionURL: "https://leetcode.com/problems/maximum-subarray",
        solutionURL:
            "https://leetcode.com/problems/maximum-subarray/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Range Sum Query - Immutable",
        questionURL: "https://leetcode.com/problems/range-sum-query-immutable",
        solutionURL:
            "https://leetcode.com/problems/range-sum-query-immutable/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "House Robber II",
        questionURL: "https://leetcode.com/problems/house-robber-ii",
        solutionURL:
            "https://leetcode.com/problems/house-robber-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Coin Change",
        questionURL: "https://leetcode.com/problems/coin-change",
        solutionURL:
            "https://leetcode.com/problems/coin-change/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Maximum Product Subarray",
        questionURL: "https://leetcode.com/problems/maximum-product-subarray",
        solutionURL:
            "https://leetcode.com/problems/maximum-product-subarray/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Increasing Subsequence",
        questionURL:
            "https://leetcode.com/problems/longest-increasing-subsequence",
        solutionURL:
            "https://leetcode.com/problems/longest-increasing-subsequence/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Longest Palindromic Substring",
        questionURL:
            "https://leetcode.com/problems/longest-palindromic-substring",
        solutionURL:
            "https://leetcode.com/problems/longest-palindromic-substring/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Word Break",
        questionURL: "https://leetcode.com/problems/word-break",
        solutionURL:
            "https://leetcode.com/problems/word-break/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Combination Sum IV",
        questionURL: "https://leetcode.com/problems/combination-sum-iv",
        solutionURL:
            "https://leetcode.com/problems/combination-sum-iv/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Decode Ways",
        questionURL: "https://leetcode.com/problems/decode-ways",
        solutionURL:
            "https://leetcode.com/problems/decode-ways/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Unique Paths",
        questionURL: "https://leetcode.com/problems/unique-paths",
        solutionURL:
            "https://leetcode.com/problems/unique-paths/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Jump Game",
        questionURL: "https://leetcode.com/problems/jump-game",
        solutionURL:
            "https://leetcode.com/problems/jump-game/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming", "Greedy"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Palindromic Substrings",
        questionURL: "https://leetcode.com/problems/palindromic-substrings",
        solutionURL:
            "https://leetcode.com/problems/palindromic-substrings/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Number of Longest Increasing Subsequence",
        questionURL:
            "https://leetcode.com/problems/number-of-longest-increasing-subsequence",
        solutionURL:
            "https://leetcode.com/problems/number-of-longest-increasing-subsequence/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Partition Equal Subset Sum",
        questionURL: "https://leetcode.com/problems/partition-equal-subset-sum",
        solutionURL:
            "https://leetcode.com/problems/partition-equal-subset-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Partition to K Equal Sum Subsets",
        questionURL:
            "https://leetcode.com/problems/partition-to-k-equal-sum-subsets",
        solutionURL:
            "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Best Time to Buy and Sell Stock with Cooldown",
        questionURL:
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown",
        solutionURL:
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Counting Bits",
        questionURL: "https://leetcode.com/problems/counting-bits",
        solutionURL:
            "https://leetcode.com/problems/counting-bits/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Dynamic Programming", "Bit Manipulation"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Linked List Cycle",
        questionURL: "https://leetcode.com/problems/linked-list-cycle",
        solutionURL:
            "https://leetcode.com/problems/linked-list-cycle/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Middle of the Linked List",
        questionURL: "https://leetcode.com/problems/middle-of-the-linked-list",
        solutionURL:
            "https://leetcode.com/problems/middle-of-the-linked-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reverse Linked List",
        questionURL: "https://leetcode.com/problems/reverse-linked-list",
        solutionURL:
            "https://leetcode.com/problems/reverse-linked-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Palindrome Linked List",
        questionURL: "https://leetcode.com/problems/palindrome-linked-list",
        solutionURL:
            "https://leetcode.com/problems/palindrome-linked-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Remove Linked List Elements",
        questionURL:
            "https://leetcode.com/problems/remove-linked-list-elements",
        solutionURL:
            "https://leetcode.com/problems/remove-linked-list-elements/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Remove Duplicates from Sorted List",
        questionURL:
            "https://leetcode.com/problems/remove-duplicates-from-sorted-list",
        solutionURL:
            "https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Linked List Cycle II",
        questionURL: "https://leetcode.com/problems/linked-list-cycle-ii",
        solutionURL:
            "https://leetcode.com/problems/linked-list-cycle-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Add Two Numbers",
        questionURL: "https://leetcode.com/problems/add-two-numbers",
        solutionURL:
            "https://leetcode.com/problems/add-two-numbers/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Remove Nth Node From End of List",
        questionURL:
            "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
        solutionURL:
            "https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Sort List",
        questionURL: "https://leetcode.com/problems/sort-list",
        solutionURL:
            "https://leetcode.com/problems/sort-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reorder List",
        questionURL: "https://leetcode.com/problems/reorder-list",
        solutionURL:
            "https://leetcode.com/problems/reorder-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Fast & Slow Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Clone Graph",
        questionURL: "https://leetcode.com/problems/clone-graph",
        solutionURL:
            "https://leetcode.com/problems/clone-graph/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS", "Graph"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Pacific Atlantic Water Flow",
        questionURL:
            "https://leetcode.com/problems/pacific-atlantic-water-flow",
        solutionURL:
            "https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Number of Islands",
        questionURL: "https://leetcode.com/problems/number-of-islands",
        solutionURL:
            "https://leetcode.com/problems/number-of-islands/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS", "Union Find"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Reverse Linked List II",
        questionURL: "https://leetcode.com/problems/reverse-linked-list-ii",
        solutionURL:
            "https://leetcode.com/problems/reverse-linked-list-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Rotate List",
        questionURL: "https://leetcode.com/problems/rotate-list",
        solutionURL:
            "https://leetcode.com/problems/rotate-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Swap Nodes in Pairs",
        questionURL: "https://leetcode.com/problems/swap-nodes-in-pairs",
        solutionURL:
            "https://leetcode.com/problems/swap-nodes-in-pairs/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Odd Even Linked List",
        questionURL: "https://leetcode.com/problems/odd-even-linked-list",
        solutionURL:
            "https://leetcode.com/problems/odd-even-linked-list/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reverse Nodes in k-Group",
        questionURL: "https://leetcode.com/problems/reverse-nodes-in-k-group",
        solutionURL:
            "https://leetcode.com/problems/reverse-nodes-in-k-group/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["In-place reversal of a linked list"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Merge Two Sorted Lists",
        questionURL: "https://leetcode.com/problems/merge-two-sorted-lists",
        solutionURL:
            "https://leetcode.com/problems/merge-two-sorted-lists/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Kth Smallest Element in a Sorted Matrix",
        questionURL:
            "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
        solutionURL:
            "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search", "Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find K Pairs with Smallest Sums",
        questionURL:
            "https://leetcode.com/problems/find-k-pairs-with-smallest-sums",
        solutionURL:
            "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Merge k Sorted Lists",
        questionURL: "https://leetcode.com/problems/merge-k-sorted-lists",
        solutionURL:
            "https://leetcode.com/problems/merge-k-sorted-lists/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Smallest Range Covering Elements from K Lists",
        questionURL:
            "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
        solutionURL:
            "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Intervals",
        questionURL: "https://leetcode.com/problems/merge-intervals",
        solutionURL:
            "https://leetcode.com/problems/merge-intervals/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Intervals"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Interval List Intersections",
        questionURL:
            "https://leetcode.com/problems/interval-list-intersections",
        solutionURL:
            "https://leetcode.com/problems/interval-list-intersections/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Intervals"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Non-overlapping Intervals",
        questionURL: "https://leetcode.com/problems/non-overlapping-intervals",
        solutionURL:
            "https://leetcode.com/problems/non-overlapping-intervals/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Intervals"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Meeting Rooms II",
        questionURL: "https://leetcode.com/problems/meeting-rooms-ii",
        solutionURL:
            "https://leetcode.com/problems/meeting-rooms-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap", "Intervals"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Task Scheduler",
        questionURL: "https://leetcode.com/problems/task-scheduler",
        solutionURL:
            "https://leetcode.com/problems/task-scheduler/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Greedy", "Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Number of Arrows to Burst Balloons",
        questionURL:
            "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",
        solutionURL:
            "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Greedy"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Insert Interval",
        questionURL: "https://leetcode.com/problems/insert-interval",
        solutionURL:
            "https://leetcode.com/problems/insert-interval/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Intervals"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Search",
        questionURL: "https://leetcode.com/problems/binary-search",
        solutionURL:
            "https://leetcode.com/problems/binary-search/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Smallest Letter Greater Than Target",
        questionURL:
            "https://leetcode.com/problems/find-smallest-letter-greater-than-target",
        solutionURL:
            "https://leetcode.com/problems/find-smallest-letter-greater-than-target/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Peak Index in a Mountain Array",
        questionURL:
            "https://leetcode.com/problems/peak-index-in-a-mountain-array",
        solutionURL:
            "https://leetcode.com/problems/peak-index-in-a-mountain-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Minimum in Rotated Sorted Array",
        questionURL:
            "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
        solutionURL:
            "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Peak Element",
        questionURL: "https://leetcode.com/problems/find-peak-element",
        solutionURL:
            "https://leetcode.com/problems/find-peak-element/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Search in Rotated Sorted Array",
        questionURL:
            "https://leetcode.com/problems/search-in-rotated-sorted-array",
        solutionURL:
            "https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Search in Rotated Sorted Array II",
        questionURL:
            "https://leetcode.com/problems/search-in-rotated-sorted-array-ii",
        solutionURL:
            "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Search a 2D Matrix",
        questionURL: "https://leetcode.com/problems/search-a-2d-matrix",
        solutionURL:
            "https://leetcode.com/problems/search-a-2d-matrix/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Search a 2D Matrix II",
        questionURL: "https://leetcode.com/problems/search-a-2d-matrix-ii",
        solutionURL:
            "https://leetcode.com/problems/search-a-2d-matrix-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find K Closest Elements",
        questionURL: "https://leetcode.com/problems/find-k-closest-elements",
        solutionURL:
            "https://leetcode.com/problems/find-k-closest-elements/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Count of Range Sum",
        questionURL: "https://leetcode.com/problems/count-of-range-sum",
        solutionURL:
            "https://leetcode.com/problems/count-of-range-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Size Subarray Sum",
        questionURL: "https://leetcode.com/problems/minimum-size-subarray-sum",
        solutionURL:
            "https://leetcode.com/problems/minimum-size-subarray-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Fruit Into Baskets",
        questionURL: "https://leetcode.com/problems/fruit-into-baskets",
        solutionURL:
            "https://leetcode.com/problems/fruit-into-baskets/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Permutation in String",
        questionURL: "https://leetcode.com/problems/permutation-in-string",
        solutionURL:
            "https://leetcode.com/problems/permutation-in-string/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Repeating Character Replacement",
        questionURL:
            "https://leetcode.com/problems/longest-repeating-character-replacement",
        solutionURL:
            "https://leetcode.com/problems/longest-repeating-character-replacement/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Sliding Window Maximum",
        questionURL: "https://leetcode.com/problems/sliding-window-maximum",
        solutionURL:
            "https://leetcode.com/problems/sliding-window-maximum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Longest Substring Without Repeating Characters",
        questionURL:
            "https://leetcode.com/problems/longest-substring-without-repeating-characters",
        solutionURL:
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Minimum Number of K Consecutive Bit Flips",
        questionURL:
            "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips",
        solutionURL:
            "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "HARD" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Count Unique Characters of All Substrings of a Given String",
        questionURL:
            "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string",
        solutionURL:
            "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Window Substring",
        questionURL: "https://leetcode.com/problems/minimum-window-substring",
        solutionURL:
            "https://leetcode.com/problems/minimum-window-substring/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Substring with Concatenation of All Words",
        questionURL:
            "https://leetcode.com/problems/substring-with-concatenation-of-all-words",
        solutionURL:
            "https://leetcode.com/problems/substring-with-concatenation-of-all-words/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Kth Smallest Element in a BST",
        questionURL:
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
        solutionURL:
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "K Closest Points to Origin",
        questionURL: "https://leetcode.com/problems/k-closest-points-to-origin",
        solutionURL:
            "https://leetcode.com/problems/k-closest-points-to-origin/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Top K Frequent Elements",
        questionURL: "https://leetcode.com/problems/top-k-frequent-elements",
        solutionURL:
            "https://leetcode.com/problems/top-k-frequent-elements/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Sort Characters By Frequency",
        questionURL:
            "https://leetcode.com/problems/sort-characters-by-frequency",
        solutionURL:
            "https://leetcode.com/problems/sort-characters-by-frequency/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Kth Largest Element in an Array",
        questionURL:
            "https://leetcode.com/problems/kth-largest-element-in-an-array",
        solutionURL:
            "https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap", "QuickSelect"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Reorganize String",
        questionURL: "https://leetcode.com/problems/reorganize-string",
        solutionURL:
            "https://leetcode.com/problems/reorganize-string/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Greedy", "Heap"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Course Schedule III",
        questionURL: "https://leetcode.com/problems/course-schedule-iii",
        solutionURL:
            "https://leetcode.com/problems/course-schedule-iii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Greedy", "Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Maximum Frequency Stack",
        questionURL: "https://leetcode.com/problems/maximum-frequency-stack",
        solutionURL:
            "https://leetcode.com/problems/maximum-frequency-stack/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Bucket Sort", "Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Course Schedule",
        questionURL: "https://leetcode.com/problems/course-schedule",
        solutionURL:
            "https://leetcode.com/problems/course-schedule/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS", "Graph", "Topological Sort"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Course Schedule II",
        questionURL: "https://leetcode.com/problems/course-schedule-ii",
        solutionURL:
            "https://leetcode.com/problems/course-schedule-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS", "Graph", "Topological Sort"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Minimum Height Trees",
        questionURL: "https://leetcode.com/problems/minimum-height-trees",
        solutionURL:
            "https://leetcode.com/problems/minimum-height-trees/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "Graph", "Topological Sort"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Level Order Traversal II",
        questionURL:
            "https://leetcode.com/problems/binary-tree-level-order-traversal-ii",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Average of Levels in Binary Tree",
        questionURL:
            "https://leetcode.com/problems/average-of-levels-in-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/average-of-levels-in-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Depth of Binary Tree",
        questionURL:
            "https://leetcode.com/problems/minimum-depth-of-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Level Order Traversal",
        questionURL:
            "https://leetcode.com/problems/binary-tree-level-order-traversal",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Zigzag Level Order Traversal",
        questionURL:
            "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Populating Next Right Pointers in Each Node",
        questionURL:
            "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
        solutionURL:
            "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Populating Next Right Pointers in Each Node II",
        questionURL:
            "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii",
        solutionURL:
            "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Right Side View",
        questionURL:
            "https://leetcode.com/problems/binary-tree-right-side-view",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-right-side-view/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "All Nodes Distance K in Binary Tree",
        questionURL:
            "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["BFS", "DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Same Tree",
        questionURL: "https://leetcode.com/problems/same-tree",
        solutionURL:
            "https://leetcode.com/problems/same-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Path Sum",
        questionURL: "https://leetcode.com/problems/path-sum",
        solutionURL:
            "https://leetcode.com/problems/path-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Maximum Depth of Binary Tree",
        questionURL:
            "https://leetcode.com/problems/maximum-depth-of-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Diameter of Binary Tree",
        questionURL: "https://leetcode.com/problems/diameter-of-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/diameter-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Merge Two Binary Trees",
        questionURL: "https://leetcode.com/problems/merge-two-binary-trees",
        solutionURL:
            "https://leetcode.com/problems/merge-two-binary-trees/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        questionURL:
            "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
        solutionURL:
            "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Subtree of Another Tree",
        questionURL: "https://leetcode.com/problems/subtree-of-another-tree",
        solutionURL:
            "https://leetcode.com/problems/subtree-of-another-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Invert Binary Tree",
        questionURL: "https://leetcode.com/problems/invert-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/invert-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Path Sum II",
        questionURL: "https://leetcode.com/problems/path-sum-ii",
        solutionURL:
            "https://leetcode.com/problems/path-sum-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Path Sum III",
        questionURL: "https://leetcode.com/problems/path-sum-iii",
        solutionURL:
            "https://leetcode.com/problems/path-sum-iii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Lowest Common Ancestor of a Binary Tree",
        questionURL:
            "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Maximum Binary Tree",
        questionURL: "https://leetcode.com/problems/maximum-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/maximum-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Maximum Width of Binary Tree",
        questionURL:
            "https://leetcode.com/problems/maximum-width-of-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/maximum-width-of-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        questionURL:
            "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
        solutionURL:
            "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Validate Binary Search Tree",
        questionURL:
            "https://leetcode.com/problems/validate-binary-search-tree",
        solutionURL:
            "https://leetcode.com/problems/validate-binary-search-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Implement Trie (Prefix Tree)",
        questionURL: "https://leetcode.com/problems/implement-trie-prefix-tree",
        solutionURL:
            "https://leetcode.com/problems/implement-trie-prefix-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Design", "Trie"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Maximum Path Sum",
        questionURL:
            "https://leetcode.com/problems/binary-tree-maximum-path-sum",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Serialize and Deserialize Binary Tree",
        questionURL:
            "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
        solutionURL:
            "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Design"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Word Search II",
        questionURL: "https://leetcode.com/problems/word-search-ii",
        solutionURL:
            "https://leetcode.com/problems/word-search-ii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS", "Trie"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Find Median from Data Stream",
        questionURL:
            "https://leetcode.com/problems/find-median-from-data-stream",
        solutionURL:
            "https://leetcode.com/problems/find-median-from-data-stream/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sliding Window Median",
        questionURL: "https://leetcode.com/problems/sliding-window-median",
        solutionURL:
            "https://leetcode.com/problems/sliding-window-median/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Heap"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Two Sum",
        questionURL: "https://leetcode.com/problems/two-sum",
        solutionURL:
            "https://leetcode.com/problems/two-sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Squares of a Sorted Array",
        questionURL: "https://leetcode.com/problems/squares-of-a-sorted-array",
        solutionURL:
            "https://leetcode.com/problems/squares-of-a-sorted-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Backspace String Compare",
        questionURL: "https://leetcode.com/problems/backspace-string-compare",
        solutionURL:
            "https://leetcode.com/problems/backspace-string-compare/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "3Sum",
        questionURL: "https://leetcode.com/problems/3sum",
        solutionURL:
            "https://leetcode.com/problems/3sum/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "3Sum Closest",
        questionURL: "https://leetcode.com/problems/3sum-closest",
        solutionURL:
            "https://leetcode.com/problems/3sum-closest/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Subarray Product Less Than K",
        questionURL:
            "https://leetcode.com/problems/subarray-product-less-than-k",
        solutionURL:
            "https://leetcode.com/problems/subarray-product-less-than-k/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sort Colors",
        questionURL: "https://leetcode.com/problems/sort-colors",
        solutionURL:
            "https://leetcode.com/problems/sort-colors/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Trapping Rain Water",
        questionURL: "https://leetcode.com/problems/trapping-rain-water",
        solutionURL:
            "https://leetcode.com/problems/trapping-rain-water/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Container With Most Water",
        questionURL: "https://leetcode.com/problems/container-with-most-water",
        solutionURL:
            "https://leetcode.com/problems/container-with-most-water/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Longest Word in Dictionary",
        questionURL: "https://leetcode.com/problems/longest-word-in-dictionary",
        solutionURL:
            "https://leetcode.com/problems/longest-word-in-dictionary/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Maximum XOR of Two Numbers in an Array",
        questionURL:
            "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",
        solutionURL:
            "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Concatenated Words",
        questionURL: "https://leetcode.com/problems/concatenated-words",
        solutionURL:
            "https://leetcode.com/problems/concatenated-words/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Prefix and Suffix Search",
        questionURL: "https://leetcode.com/problems/prefix-and-suffix-search",
        solutionURL:
            "https://leetcode.com/problems/prefix-and-suffix-search/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "HARD" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Palindrome Pairs",
        questionURL: "https://leetcode.com/problems/palindrome-pairs",
        solutionURL:
            "https://leetcode.com/problems/palindrome-pairs/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Design Search Autocomplete System",
        questionURL:
            "https://leetcode.com/problems/design-search-autocomplete-system",
        solutionURL:
            "https://leetcode.com/problems/design-search-autocomplete-system/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Trie"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sort Items by Groups Respecting Dependencies",
        questionURL:
            "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies",
        solutionURL:
            "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS", "Graph", "Topological Sort"],
        difficulty: "HARD" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Median of Two Sorted Arrays",
        questionURL:
            "https://leetcode.com/problems/median-of-two-sorted-arrays",
        solutionURL:
            "https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Binary Search"],
        difficulty: "HARD" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Majority Element",
        questionURL: "https://leetcode.com/problems/majority-element",
        solutionURL:
            "https://leetcode.com/problems/majority-element/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sorting"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Convert 1D Array Into 2D Array",
        questionURL:
            "https://leetcode.com/problems/convert-1d-array-into-2d-array",
        solutionURL:
            "https://leetcode.com/problems/convert-1d-array-into-2d-array/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Move Zeroes",
        questionURL: "https://leetcode.com/problems/move-zeroes",
        solutionURL:
            "https://leetcode.com/problems/move-zeroes/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Arrays", "Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
    {
        title: "Is Subsequence",
        questionURL: "https://leetcode.com/problems/is-subsequence",
        solutionURL:
            "https://leetcode.com/problems/is-subsequence/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Two Pointers"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Paths",
        questionURL: "https://leetcode.com/problems/binary-tree-paths",
        solutionURL:
            "https://leetcode.com/problems/binary-tree-paths/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["DFS", "Backtracking"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Split a String Into the Max Number of Unique Substrings",
        questionURL:
            "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings",
        solutionURL:
            "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Backtracking"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "LOW" as Popularity,
    },
    {
        title: "Maximum Average Subarray I",
        questionURL: "https://leetcode.com/problems/maximum-average-subarray-i",
        solutionURL:
            "https://leetcode.com/problems/maximum-average-subarray-i/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Maximum Number of Vowels in a Substring of Given Length",
        questionURL:
            "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length",
        solutionURL:
            "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Max Consecutive Ones III",
        questionURL: "https://leetcode.com/problems/max-consecutive-ones-iii",
        solutionURL:
            "https://leetcode.com/problems/max-consecutive-ones-iii/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Subarray of 1's After Deleting One Element",
        questionURL:
            "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element",
        solutionURL:
            "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/discuss/?currentPage=1&orderBy=most_votes",
        patternList: ["Sliding Window", "Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "HIGH" as Popularity,
    },
];

const algoExpertProblems = [
    {
        title: "Palindrome Check",
        questionURL: "https://www.algoexpert.io/questions/palindrome-check",
        solutionURL: "https://www.algoexpert.io/questions/palindrome-check",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Caesar Cipher Encryptor",
        questionURL:
            "https://www.algoexpert.io/questions/caesar-cipher-encryptor",
        solutionURL:
            "https://www.algoexpert.io/questions/caesar-cipher-encryptor",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Palindromic Substring",
        questionURL:
            "https://www.algoexpert.io/questions/longest-palindromic-substring",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-palindromic-substring",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Substring Without Duplication",
        questionURL:
            "https://www.algoexpert.io/questions/longest-substring-without-duplication",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-substring-without-duplication",
        patternList: ["Strings"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Underscorify Substring",
        questionURL:
            "https://www.algoexpert.io/questions/underscorify-substring",
        solutionURL:
            "https://www.algoexpert.io/questions/underscorify-substring",
        patternList: ["Strings"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Pattern Matcher",
        questionURL: "https://www.algoexpert.io/questions/pattern-matcher",
        solutionURL: "https://www.algoexpert.io/questions/pattern-matcher",
        patternList: ["Strings"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Group Anagrams",
        questionURL: "https://www.algoexpert.io/questions/group-anagrams",
        solutionURL: "https://www.algoexpert.io/questions/group-anagrams",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Smallest Substring Containing",
        questionURL:
            "https://www.algoexpert.io/questions/smallest-substring-containing",
        solutionURL:
            "https://www.algoexpert.io/questions/smallest-substring-containing",
        patternList: ["Strings"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Run-Length Encoding",
        questionURL: "https://www.algoexpert.io/questions/run-length-encoding",
        solutionURL: "https://www.algoexpert.io/questions/run-length-encoding",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Balanced Substring",
        questionURL:
            "https://www.algoexpert.io/questions/longest-balanced-substring",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-balanced-substring",
        patternList: ["Strings"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Valid IP Addresses",
        questionURL: "https://www.algoexpert.io/questions/valid-ip-addresses",
        solutionURL: "https://www.algoexpert.io/questions/valid-ip-addresses",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reverse Words In String",
        questionURL:
            "https://www.algoexpert.io/questions/reverse-words-in-string",
        solutionURL:
            "https://www.algoexpert.io/questions/reverse-words-in-string",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Common Characters",
        questionURL: "https://www.algoexpert.io/questions/common-characters",
        solutionURL: "https://www.algoexpert.io/questions/common-characters",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Generate Document",
        questionURL: "https://www.algoexpert.io/questions/generate-document",
        solutionURL: "https://www.algoexpert.io/questions/generate-document",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "First Non-Repeating Character",
        questionURL:
            "https://www.algoexpert.io/questions/first-non-repeating-character",
        solutionURL:
            "https://www.algoexpert.io/questions/first-non-repeating-character",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Characters For Words",
        questionURL:
            "https://www.algoexpert.io/questions/minimum-characters-for-words",
        solutionURL:
            "https://www.algoexpert.io/questions/minimum-characters-for-words",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Bubble Sort",
        questionURL: "https://www.algoexpert.io/questions/bubble-sort",
        solutionURL: "https://www.algoexpert.io/questions/bubble-sort",
        patternList: ["Sorting"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Insertion Sort",
        questionURL: "https://www.algoexpert.io/questions/insertion-sort",
        solutionURL: "https://www.algoexpert.io/questions/insertion-sort",
        patternList: ["Sorting"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Selection Sort",
        questionURL: "https://www.algoexpert.io/questions/selection-sort",
        solutionURL: "https://www.algoexpert.io/questions/selection-sort",
        patternList: ["Sorting"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Sort",
        questionURL: "https://www.algoexpert.io/questions/merge-sort",
        solutionURL: "https://www.algoexpert.io/questions/merge-sort",
        patternList: ["Sorting"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Quick Sort",
        questionURL: "https://www.algoexpert.io/questions/quick-sort",
        solutionURL: "https://www.algoexpert.io/questions/quick-sort",
        patternList: ["Sorting"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Heap Sort",
        questionURL: "https://www.algoexpert.io/questions/heap-sort",
        solutionURL: "https://www.algoexpert.io/questions/heap-sort",
        patternList: ["Sorting"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Three Number Sort",
        questionURL: "https://www.algoexpert.io/questions/three-number-sort",
        solutionURL: "https://www.algoexpert.io/questions/three-number-sort",
        patternList: ["Sorting"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Count Inversions",
        questionURL: "https://www.algoexpert.io/questions/count-inversions",
        solutionURL: "https://www.algoexpert.io/questions/count-inversions",
        patternList: ["Sorting"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Radix Sort",
        questionURL: "https://www.algoexpert.io/questions/radix-sort",
        solutionURL: "https://www.algoexpert.io/questions/radix-sort",
        patternList: ["Sorting"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Depth-first Search",
        questionURL: "https://www.algoexpert.io/questions/depth-first-search",
        solutionURL: "https://www.algoexpert.io/questions/depth-first-search",
        patternList: ["Graphs"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Single Cycle Check",
        questionURL: "https://www.algoexpert.io/questions/single-cycle-check",
        solutionURL: "https://www.algoexpert.io/questions/single-cycle-check",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Breadth-first Search",
        questionURL: "https://www.algoexpert.io/questions/breadth-first-search",
        solutionURL: "https://www.algoexpert.io/questions/breadth-first-search",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "River Sizes",
        questionURL: "https://www.algoexpert.io/questions/river-sizes",
        solutionURL: "https://www.algoexpert.io/questions/river-sizes",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Boggle Board",
        questionURL: "https://www.algoexpert.io/questions/boggle-board",
        solutionURL: "https://www.algoexpert.io/questions/boggle-board",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Youngest Common Ancestor",
        questionURL:
            "https://www.algoexpert.io/questions/youngest-common-ancestor",
        solutionURL:
            "https://www.algoexpert.io/questions/youngest-common-ancestor",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Rectangle Mania",
        questionURL: "https://www.algoexpert.io/questions/rectangle-mania",
        solutionURL: "https://www.algoexpert.io/questions/rectangle-mania",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Remove Islands",
        questionURL: "https://www.algoexpert.io/questions/remove-islands",
        solutionURL: "https://www.algoexpert.io/questions/remove-islands",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Cycle In Graph",
        questionURL: "https://www.algoexpert.io/questions/cycle-in-graph",
        solutionURL: "https://www.algoexpert.io/questions/cycle-in-graph",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Detect Arbitrage",
        questionURL: "https://www.algoexpert.io/questions/detect-arbitrage",
        solutionURL: "https://www.algoexpert.io/questions/detect-arbitrage",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Two-Edge-Connected Graph",
        questionURL:
            "https://www.algoexpert.io/questions/two-edge-connected-graph",
        solutionURL:
            "https://www.algoexpert.io/questions/two-edge-connected-graph",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Passes Of Matrix",
        questionURL:
            "https://www.algoexpert.io/questions/minimum-passes-of-matrix",
        solutionURL:
            "https://www.algoexpert.io/questions/minimum-passes-of-matrix",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Max Stack Construction",
        questionURL:
            "https://www.algoexpert.io/questions/min-max-stack-construction",
        solutionURL:
            "https://www.algoexpert.io/questions/min-max-stack-construction",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Balanced Brackets",
        questionURL: "https://www.algoexpert.io/questions/balanced-brackets",
        solutionURL: "https://www.algoexpert.io/questions/balanced-brackets",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Shorten Path",
        questionURL: "https://www.algoexpert.io/questions/shorten-path",
        solutionURL: "https://www.algoexpert.io/questions/shorten-path",
        patternList: ["Stacks"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sunset Views",
        questionURL: "https://www.algoexpert.io/questions/sunset-views",
        solutionURL: "https://www.algoexpert.io/questions/sunset-views",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Largest Rectangle Under Skyline",
        questionURL:
            "https://www.algoexpert.io/questions/largest-rectangle-under-skyline",
        solutionURL:
            "https://www.algoexpert.io/questions/largest-rectangle-under-skyline",
        patternList: ["Stacks"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Best Digits",
        questionURL: "https://www.algoexpert.io/questions/best-digits",
        solutionURL: "https://www.algoexpert.io/questions/best-digits",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sort Stack",
        questionURL: "https://www.algoexpert.io/questions/sort-stack",
        solutionURL: "https://www.algoexpert.io/questions/sort-stack",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Next Greater Element",
        questionURL: "https://www.algoexpert.io/questions/next-greater-element",
        solutionURL: "https://www.algoexpert.io/questions/next-greater-element",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Suffix Trie Construction",
        questionURL:
            "https://www.algoexpert.io/questions/suffix-trie-construction",
        solutionURL:
            "https://www.algoexpert.io/questions/suffix-trie-construction",
        patternList: ["Tries"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Multi String Search",
        questionURL: "https://www.algoexpert.io/questions/multi-string-search",
        solutionURL: "https://www.algoexpert.io/questions/multi-string-search",
        patternList: ["Tries"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Linked List Construction",
        questionURL:
            "https://www.algoexpert.io/questions/linked-list-construction",
        solutionURL:
            "https://www.algoexpert.io/questions/linked-list-construction",
        patternList: ["Linked Lists"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Remove Kth Node From End",
        questionURL:
            "https://www.algoexpert.io/questions/remove-kth-node-from-end",
        solutionURL:
            "https://www.algoexpert.io/questions/remove-kth-node-from-end",
        patternList: ["Linked Lists"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Loop",
        questionURL: "https://www.algoexpert.io/questions/find-loop",
        solutionURL: "https://www.algoexpert.io/questions/find-loop",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "LRU Cache",
        questionURL: "https://www.algoexpert.io/questions/lru-cache",
        solutionURL: "https://www.algoexpert.io/questions/lru-cache",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reverse Linked List",
        questionURL: "https://www.algoexpert.io/questions/reverse-linked-list",
        solutionURL: "https://www.algoexpert.io/questions/reverse-linked-list",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Linked Lists",
        questionURL: "https://www.algoexpert.io/questions/merge-linked-lists",
        solutionURL: "https://www.algoexpert.io/questions/merge-linked-lists",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Shift Linked List",
        questionURL: "https://www.algoexpert.io/questions/shift-linked-list",
        solutionURL: "https://www.algoexpert.io/questions/shift-linked-list",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Rearrange Linked List",
        questionURL:
            "https://www.algoexpert.io/questions/rearrange-linked-list",
        solutionURL:
            "https://www.algoexpert.io/questions/rearrange-linked-list",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Linked List Palindrome",
        questionURL:
            "https://www.algoexpert.io/questions/linked-list-palindrome",
        solutionURL:
            "https://www.algoexpert.io/questions/linked-list-palindrome",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Remove Duplicates From Linked List",
        questionURL:
            "https://www.algoexpert.io/questions/remove-duplicates-from-linked-list",
        solutionURL:
            "https://www.algoexpert.io/questions/remove-duplicates-from-linked-list",
        patternList: ["Linked Lists"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sum of Linked Lists",
        questionURL: "https://www.algoexpert.io/questions/sum-of-linked-lists",
        solutionURL: "https://www.algoexpert.io/questions/sum-of-linked-lists",
        patternList: ["Linked Lists"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Zip Linked List",
        questionURL: "https://www.algoexpert.io/questions/zip-linked-list",
        solutionURL: "https://www.algoexpert.io/questions/zip-linked-list",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Node Swap",
        questionURL: "https://www.algoexpert.io/questions/node-swap",
        solutionURL: "https://www.algoexpert.io/questions/node-swap",
        patternList: ["Linked Lists"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Heap Construction",
        questionURL:
            "https://www.algoexpert.io/questions/min-heap-construction",
        solutionURL:
            "https://www.algoexpert.io/questions/min-heap-construction",
        patternList: ["Heaps"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Continuous Median",
        questionURL: "https://www.algoexpert.io/questions/continuous-median",
        solutionURL: "https://www.algoexpert.io/questions/continuous-median",
        patternList: ["Heaps"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Sorted Arrays",
        questionURL: "https://www.algoexpert.io/questions/merge-sorted-arrays",
        solutionURL: "https://www.algoexpert.io/questions/merge-sorted-arrays",
        patternList: ["Heaps"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sort K-Sorted Array",
        questionURL: "https://www.algoexpert.io/questions/sort-k-sorted-array",
        solutionURL: "https://www.algoexpert.io/questions/sort-k-sorted-array",
        patternList: ["Heaps"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Laptop Rentals",
        questionURL: "https://www.algoexpert.io/questions/laptop-rentals",
        solutionURL: "https://www.algoexpert.io/questions/laptop-rentals",
        patternList: ["Heaps"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Branch Sums",
        questionURL: "https://www.algoexpert.io/questions/branch-sums",
        solutionURL: "https://www.algoexpert.io/questions/branch-sums",
        patternList: ["Binary Trees"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Node Depths",
        questionURL: "https://www.algoexpert.io/questions/node-depths",
        solutionURL: "https://www.algoexpert.io/questions/node-depths",
        patternList: ["Binary Trees"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Invert Binary Tree",
        questionURL: "https://www.algoexpert.io/questions/invert-binary-tree",
        solutionURL: "https://www.algoexpert.io/questions/invert-binary-tree",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Tree Diameter",
        questionURL: "https://www.algoexpert.io/questions/binary-tree-diameter",
        solutionURL: "https://www.algoexpert.io/questions/binary-tree-diameter",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Max Path Sum In Binary Tree",
        questionURL:
            "https://www.algoexpert.io/questions/max-path-sum-in-binary-tree",
        solutionURL:
            "https://www.algoexpert.io/questions/max-path-sum-in-binary-tree",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Iterative In-order Traversal",
        questionURL:
            "https://www.algoexpert.io/questions/iterative-in-order-traversal",
        solutionURL:
            "https://www.algoexpert.io/questions/iterative-in-order-traversal",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Flatten Binary Tree",
        questionURL: "https://www.algoexpert.io/questions/flatten-binary-tree",
        solutionURL: "https://www.algoexpert.io/questions/flatten-binary-tree",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Right Sibling Tree",
        questionURL: "https://www.algoexpert.io/questions/right-sibling-tree",
        solutionURL: "https://www.algoexpert.io/questions/right-sibling-tree",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "All Kinds Of Node Depths",
        questionURL:
            "https://www.algoexpert.io/questions/all-kinds-of-node-depths",
        solutionURL:
            "https://www.algoexpert.io/questions/all-kinds-of-node-depths",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Successor",
        questionURL: "https://www.algoexpert.io/questions/find-successor",
        solutionURL: "https://www.algoexpert.io/questions/find-successor",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Nodes Distance K",
        questionURL:
            "https://www.algoexpert.io/questions/find-nodes-distance-k",
        solutionURL:
            "https://www.algoexpert.io/questions/find-nodes-distance-k",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Height Balanced Binary Tree",
        questionURL:
            "https://www.algoexpert.io/questions/height-balanced-binary-tree",
        solutionURL:
            "https://www.algoexpert.io/questions/height-balanced-binary-tree",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Compare Leaf Traversal",
        questionURL:
            "https://www.algoexpert.io/questions/compare-leaf-traversal",
        solutionURL:
            "https://www.algoexpert.io/questions/compare-leaf-traversal",
        patternList: ["Binary Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Binary Trees",
        questionURL: "https://www.algoexpert.io/questions/merge-binary-trees",
        solutionURL: "https://www.algoexpert.io/questions/merge-binary-trees",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Closest Value In BST",
        questionURL:
            "https://www.algoexpert.io/questions/find-closest-value-in-bst",
        solutionURL:
            "https://www.algoexpert.io/questions/find-closest-value-in-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "BST Construction",
        questionURL: "https://www.algoexpert.io/questions/bst-construction",
        solutionURL: "https://www.algoexpert.io/questions/bst-construction",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Validate BST",
        questionURL: "https://www.algoexpert.io/questions/validate-bst",
        solutionURL: "https://www.algoexpert.io/questions/validate-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "BST Traversal",
        questionURL: "https://www.algoexpert.io/questions/bst-traversal",
        solutionURL: "https://www.algoexpert.io/questions/bst-traversal",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Same BSTs",
        questionURL: "https://www.algoexpert.io/questions/same-bsts",
        solutionURL: "https://www.algoexpert.io/questions/same-bsts",
        patternList: ["Binary Search Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Height BST",
        questionURL: "https://www.algoexpert.io/questions/min-height-bst",
        solutionURL: "https://www.algoexpert.io/questions/min-height-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Right Smaller Than",
        questionURL: "https://www.algoexpert.io/questions/right-smaller-than",
        solutionURL: "https://www.algoexpert.io/questions/right-smaller-than",
        patternList: ["Binary Search Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Kth Largest Value In BST",
        questionURL:
            "https://www.algoexpert.io/questions/find-kth-largest-value-in-bst",
        solutionURL:
            "https://www.algoexpert.io/questions/find-kth-largest-value-in-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reconstruct BST",
        questionURL: "https://www.algoexpert.io/questions/reconstruct-bst",
        solutionURL: "https://www.algoexpert.io/questions/reconstruct-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Validate Three Nodes",
        questionURL: "https://www.algoexpert.io/questions/validate-three-nodes",
        solutionURL: "https://www.algoexpert.io/questions/validate-three-nodes",
        patternList: ["Binary Search Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Two Number Sum",
        questionURL: "https://www.algoexpert.io/questions/two-number-sum",
        solutionURL: "https://www.algoexpert.io/questions/two-number-sum",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Three Number Sum",
        questionURL: "https://www.algoexpert.io/questions/three-number-sum",
        solutionURL: "https://www.algoexpert.io/questions/three-number-sum",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Four Number Sum",
        questionURL: "https://www.algoexpert.io/questions/four-number-sum",
        solutionURL: "https://www.algoexpert.io/questions/four-number-sum",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Smallest Difference",
        questionURL: "https://www.algoexpert.io/questions/smallest-difference",
        solutionURL: "https://www.algoexpert.io/questions/smallest-difference",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Subarray Sort",
        questionURL: "https://www.algoexpert.io/questions/subarray-sort",
        solutionURL: "https://www.algoexpert.io/questions/subarray-sort",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Largest Range",
        questionURL: "https://www.algoexpert.io/questions/largest-range",
        solutionURL: "https://www.algoexpert.io/questions/largest-range",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Rewards",
        questionURL: "https://www.algoexpert.io/questions/min-rewards",
        solutionURL: "https://www.algoexpert.io/questions/min-rewards",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Zigzag Traverse",
        questionURL: "https://www.algoexpert.io/questions/zigzag-traverse",
        solutionURL: "https://www.algoexpert.io/questions/zigzag-traverse",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Apartment Hunting",
        questionURL: "https://www.algoexpert.io/questions/apartment-hunting",
        solutionURL: "https://www.algoexpert.io/questions/apartment-hunting",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Calendar Matching",
        questionURL: "https://www.algoexpert.io/questions/calendar-matching",
        solutionURL: "https://www.algoexpert.io/questions/calendar-matching",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Move Element To End",
        questionURL: "https://www.algoexpert.io/questions/move-element-to-end",
        solutionURL: "https://www.algoexpert.io/questions/move-element-to-end",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Monotonic Array",
        questionURL: "https://www.algoexpert.io/questions/monotonic-array",
        solutionURL: "https://www.algoexpert.io/questions/monotonic-array",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Spiral Traverse",
        questionURL: "https://www.algoexpert.io/questions/spiral-traverse",
        solutionURL: "https://www.algoexpert.io/questions/spiral-traverse",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Peak",
        questionURL: "https://www.algoexpert.io/questions/longest-peak",
        solutionURL: "https://www.algoexpert.io/questions/longest-peak",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Validate Subsequence",
        questionURL: "https://www.algoexpert.io/questions/validate-subsequence",
        solutionURL: "https://www.algoexpert.io/questions/validate-subsequence",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Array Of Products",
        questionURL: "https://www.algoexpert.io/questions/array-of-products",
        solutionURL: "https://www.algoexpert.io/questions/array-of-products",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Waterfall Streams",
        questionURL: "https://www.algoexpert.io/questions/waterfall-streams",
        solutionURL: "https://www.algoexpert.io/questions/waterfall-streams",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "First Duplicate Value",
        questionURL:
            "https://www.algoexpert.io/questions/first-duplicate-value",
        solutionURL:
            "https://www.algoexpert.io/questions/first-duplicate-value",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sorted Squared Array",
        questionURL: "https://www.algoexpert.io/questions/sorted-squared-array",
        solutionURL: "https://www.algoexpert.io/questions/sorted-squared-array",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Area Rectangle",
        questionURL:
            "https://www.algoexpert.io/questions/minimum-area-rectangle",
        solutionURL:
            "https://www.algoexpert.io/questions/minimum-area-rectangle",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merge Overlapping Intervals",
        questionURL:
            "https://www.algoexpert.io/questions/merge-overlapping-intervals",
        solutionURL:
            "https://www.algoexpert.io/questions/merge-overlapping-intervals",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Tournament Winner",
        questionURL: "https://www.algoexpert.io/questions/tournament-winner",
        solutionURL: "https://www.algoexpert.io/questions/tournament-winner",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Non-Constructible Change",
        questionURL:
            "https://www.algoexpert.io/questions/non-constructible-change",
        solutionURL:
            "https://www.algoexpert.io/questions/non-constructible-change",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Best Seat",
        questionURL: "https://www.algoexpert.io/questions/best-seat",
        solutionURL: "https://www.algoexpert.io/questions/best-seat",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Subarray With Sum",
        questionURL:
            "https://www.algoexpert.io/questions/longest-subarray-with-sum",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-subarray-with-sum",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Line Through Points",
        questionURL: "https://www.algoexpert.io/questions/line-through-points",
        solutionURL: "https://www.algoexpert.io/questions/line-through-points",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Kadane's Algorithm",
        questionURL: "https://www.algoexpert.io/questions/kadane's-algorithm",
        solutionURL: "https://www.algoexpert.io/questions/kadane's-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Knuth—Morris—Pratt Algorithm",
        questionURL:
            "https://www.algoexpert.io/questions/knuth-morris-pratt-algorithm",
        solutionURL:
            "https://www.algoexpert.io/questions/knuth-morris-pratt-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Dijkstra's Algorithm",
        questionURL: "https://www.algoexpert.io/questions/dijkstra's-algorithm",
        solutionURL: "https://www.algoexpert.io/questions/dijkstra's-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "A* Algorithm",
        questionURL: "https://www.algoexpert.io/questions/a*-algorithm",
        solutionURL: "https://www.algoexpert.io/questions/a*-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Topological Sort",
        questionURL: "https://www.algoexpert.io/questions/topological-sort",
        solutionURL: "https://www.algoexpert.io/questions/topological-sort",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Minimum Waiting Time",
        questionURL: "https://www.algoexpert.io/questions/minimum-waiting-time",
        solutionURL: "https://www.algoexpert.io/questions/minimum-waiting-time",
        patternList: ["Greedy Algorithms"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Task Assignment",
        questionURL: "https://www.algoexpert.io/questions/task-assignment",
        solutionURL: "https://www.algoexpert.io/questions/task-assignment",
        patternList: ["Greedy Algorithms"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Valid Starting City",
        questionURL: "https://www.algoexpert.io/questions/valid-starting-city",
        solutionURL: "https://www.algoexpert.io/questions/valid-starting-city",
        patternList: ["Greedy Algorithms"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Class Photos",
        questionURL: "https://www.algoexpert.io/questions/class-photos",
        solutionURL: "https://www.algoexpert.io/questions/class-photos",
        patternList: ["Greedy Algorithms"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Tandem Bicycle",
        questionURL: "https://www.algoexpert.io/questions/tandem-bicycle",
        solutionURL: "https://www.algoexpert.io/questions/tandem-bicycle",
        patternList: ["Greedy Algorithms"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Nth Fibonacci",
        questionURL: "https://www.algoexpert.io/questions/nth-fibonacci",
        solutionURL: "https://www.algoexpert.io/questions/nth-fibonacci",
        patternList: ["Recursion"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Permutations",
        questionURL: "https://www.algoexpert.io/questions/permutations",
        solutionURL: "https://www.algoexpert.io/questions/permutations",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Powerset",
        questionURL: "https://www.algoexpert.io/questions/powerset",
        solutionURL: "https://www.algoexpert.io/questions/powerset",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Number Of Binary Tree Topologies",
        questionURL:
            "https://www.algoexpert.io/questions/number-of-binary-tree-topologies",
        solutionURL:
            "https://www.algoexpert.io/questions/number-of-binary-tree-topologies",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Lowest Common Manager",
        questionURL:
            "https://www.algoexpert.io/questions/lowest-common-manager",
        solutionURL:
            "https://www.algoexpert.io/questions/lowest-common-manager",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Product Sum",
        questionURL: "https://www.algoexpert.io/questions/product-sum",
        solutionURL: "https://www.algoexpert.io/questions/product-sum",
        patternList: ["Recursion"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Interweaving Strings",
        questionURL: "https://www.algoexpert.io/questions/interweaving-strings",
        solutionURL: "https://www.algoexpert.io/questions/interweaving-strings",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Phone Number Mnemonics",
        questionURL:
            "https://www.algoexpert.io/questions/phone-number-mnemonics",
        solutionURL:
            "https://www.algoexpert.io/questions/phone-number-mnemonics",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Staircase Traversal",
        questionURL: "https://www.algoexpert.io/questions/staircase-traversal",
        solutionURL: "https://www.algoexpert.io/questions/staircase-traversal",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Solve Sudoku",
        questionURL: "https://www.algoexpert.io/questions/solve-sudoku",
        solutionURL: "https://www.algoexpert.io/questions/solve-sudoku",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Generate Div Tags",
        questionURL: "https://www.algoexpert.io/questions/generate-div-tags",
        solutionURL: "https://www.algoexpert.io/questions/generate-div-tags",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Ambiguous Measurements",
        questionURL:
            "https://www.algoexpert.io/questions/ambiguous-measurements",
        solutionURL:
            "https://www.algoexpert.io/questions/ambiguous-measurements",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Non-Attacking Queens",
        questionURL: "https://www.algoexpert.io/questions/non-attacking-queens",
        solutionURL: "https://www.algoexpert.io/questions/non-attacking-queens",
        patternList: ["Recursion"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Max Subset Sum No Adjacent",
        questionURL:
            "https://www.algoexpert.io/questions/max-subset-sum-no-adjacent",
        solutionURL:
            "https://www.algoexpert.io/questions/max-subset-sum-no-adjacent",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Number Of Ways To Make Change",
        questionURL:
            "https://www.algoexpert.io/questions/number-of-ways-to-make-change",
        solutionURL:
            "https://www.algoexpert.io/questions/number-of-ways-to-make-change",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Number Of Coins For Change",
        questionURL:
            "https://www.algoexpert.io/questions/min-number-of-coins-for-change",
        solutionURL:
            "https://www.algoexpert.io/questions/min-number-of-coins-for-change",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Max Sum Increasing Subsequence",
        questionURL:
            "https://www.algoexpert.io/questions/max-sum-increasing-subsequence",
        solutionURL:
            "https://www.algoexpert.io/questions/max-sum-increasing-subsequence",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Levenshtein Distance",
        questionURL: "https://www.algoexpert.io/questions/levenshtein-distance",
        solutionURL: "https://www.algoexpert.io/questions/levenshtein-distance",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Common Subsequence",
        questionURL:
            "https://www.algoexpert.io/questions/longest-common-subsequence",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-common-subsequence",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Min Number Of Jumps",
        questionURL: "https://www.algoexpert.io/questions/min-number-of-jumps",
        solutionURL: "https://www.algoexpert.io/questions/min-number-of-jumps",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Water Area",
        questionURL: "https://www.algoexpert.io/questions/water-area",
        solutionURL: "https://www.algoexpert.io/questions/water-area",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Knapsack Problem",
        questionURL: "https://www.algoexpert.io/questions/knapsack-problem",
        solutionURL: "https://www.algoexpert.io/questions/knapsack-problem",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Disk Stacking",
        questionURL: "https://www.algoexpert.io/questions/disk-stacking",
        solutionURL: "https://www.algoexpert.io/questions/disk-stacking",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Max Profit With K Transactions",
        questionURL:
            "https://www.algoexpert.io/questions/max-profit-with-k-transactions",
        solutionURL:
            "https://www.algoexpert.io/questions/max-profit-with-k-transactions",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Palindrome Partitioning Min Cuts",
        questionURL:
            "https://www.algoexpert.io/questions/palindrome-partitioning-min-cuts",
        solutionURL:
            "https://www.algoexpert.io/questions/palindrome-partitioning-min-cuts",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Increasing Subsequence",
        questionURL:
            "https://www.algoexpert.io/questions/longest-increasing-subsequence",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-increasing-subsequence",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Numbers In Pi",
        questionURL: "https://www.algoexpert.io/questions/numbers-in-pi",
        solutionURL: "https://www.algoexpert.io/questions/numbers-in-pi",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest String Chain",
        questionURL: "https://www.algoexpert.io/questions/longest-string-chain",
        solutionURL: "https://www.algoexpert.io/questions/longest-string-chain",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Square of Zeroes",
        questionURL: "https://www.algoexpert.io/questions/square-of-zeroes",
        solutionURL: "https://www.algoexpert.io/questions/square-of-zeroes",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Number Of Ways To Traverse Graph",
        questionURL:
            "https://www.algoexpert.io/questions/number-of-ways-to-traverse-graph",
        solutionURL:
            "https://www.algoexpert.io/questions/number-of-ways-to-traverse-graph",
        patternList: ["Dynamic Programming"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Maximum Sum Submatrix",
        questionURL:
            "https://www.algoexpert.io/questions/maximum-sum-submatrix",
        solutionURL:
            "https://www.algoexpert.io/questions/maximum-sum-submatrix",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Maximize Expression",
        questionURL: "https://www.algoexpert.io/questions/maximize-expression",
        solutionURL: "https://www.algoexpert.io/questions/maximize-expression",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Binary Search",
        questionURL: "https://www.algoexpert.io/questions/binary-search",
        solutionURL: "https://www.algoexpert.io/questions/binary-search",
        patternList: ["Searching"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Find Three Largest Numbers",
        questionURL:
            "https://www.algoexpert.io/questions/find-three-largest-numbers",
        solutionURL:
            "https://www.algoexpert.io/questions/find-three-largest-numbers",
        patternList: ["Searching"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Search In Sorted Matrix",
        questionURL:
            "https://www.algoexpert.io/questions/search-in-sorted-matrix",
        solutionURL:
            "https://www.algoexpert.io/questions/search-in-sorted-matrix",
        patternList: ["Searching"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Shifted Binary Search",
        questionURL:
            "https://www.algoexpert.io/questions/shifted-binary-search",
        solutionURL:
            "https://www.algoexpert.io/questions/shifted-binary-search",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Search For Range",
        questionURL: "https://www.algoexpert.io/questions/search-for-range",
        solutionURL: "https://www.algoexpert.io/questions/search-for-range",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Quickselect",
        questionURL: "https://www.algoexpert.io/questions/quickselect",
        solutionURL: "https://www.algoexpert.io/questions/quickselect",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Index Equals Value",
        questionURL: "https://www.algoexpert.io/questions/index-equals-value",
        solutionURL: "https://www.algoexpert.io/questions/index-equals-value",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Airport Connections",
        questionURL: "https://www.algoexpert.io/questions/airport-connections",
        solutionURL: "https://www.algoexpert.io/questions/airport-connections",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Stable internships",
        questionURL: "https://www.algoexpert.io/questions/stable-internships",
        solutionURL: "https://www.algoexpert.io/questions/stable-internships",
        patternList: ["Famous Algorithms"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Two-Colorable",
        questionURL: "https://www.algoexpert.io/questions/two-colorable",
        solutionURL: "https://www.algoexpert.io/questions/two-colorable",
        patternList: ["Graphs"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Kruskal's Algorithm",
        questionURL: "https://www.algoexpert.io/questions/kruskals-algorithm",
        solutionURL: "https://www.algoexpert.io/questions/kruskals-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Optimal Freelancing",
        questionURL: "https://www.algoexpert.io/questions/optimal-freelancing",
        solutionURL: "https://www.algoexpert.io/questions/optimal-freelancing",
        patternList: ["Greedy Algorithms"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Zero Sum Subarray",
        questionURL: "https://www.algoexpert.io/questions/zero-sum-subarray",
        solutionURL: "https://www.algoexpert.io/questions/zero-sum-subarray",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Semordnilap",
        questionURL: "https://www.algoexpert.io/questions/semordnilap",
        solutionURL: "https://www.algoexpert.io/questions/semordnilap",
        patternList: ["Strings"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Merging Linked Lists",
        questionURL: "https://www.algoexpert.io/questions/merging-linked-lists",
        solutionURL: "https://www.algoexpert.io/questions/merging-linked-lists",
        patternList: ["Linked Lists"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Symmetrical Tree",
        questionURL: "https://www.algoexpert.io/questions/symmetrical-tree",
        solutionURL: "https://www.algoexpert.io/questions/symmetrical-tree",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Knight Connection",
        questionURL: "https://www.algoexpert.io/questions/knight-connection",
        solutionURL: "https://www.algoexpert.io/questions/knight-connection",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Dice Throws",
        questionURL: "https://www.algoexpert.io/questions/dice-throws",
        solutionURL: "https://www.algoexpert.io/questions/dice-throws",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Count Squares",
        questionURL: "https://www.algoexpert.io/questions/count-squares",
        solutionURL: "https://www.algoexpert.io/questions/count-squares",
        patternList: ["Arrays"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Juice Bottling",
        questionURL: "https://www.algoexpert.io/questions/juice-bottling",
        solutionURL: "https://www.algoexpert.io/questions/juice-bottling",
        patternList: ["Dynamic Programming"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Middle Node",
        questionURL: "https://www.algoexpert.io/questions/middle-node",
        solutionURL: "https://www.algoexpert.io/questions/middle-node",
        patternList: ["Linked Lists"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Missing Numbers",
        questionURL: "https://www.algoexpert.io/questions/missingNumbers",
        solutionURL: "https://www.algoexpert.io/questions/missingNumbers",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "One Edit",
        questionURL: "https://www.algoexpert.io/questions/one-edit",
        solutionURL: "https://www.algoexpert.io/questions/one-edit",
        patternList: ["Strings"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reverse Polish Notation",
        questionURL:
            "https://www.algoexpert.io/questions/reversePolishNotation",
        solutionURL:
            "https://www.algoexpert.io/questions/reversePolishNotation",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Union Find",
        questionURL: "https://www.algoexpert.io/questions/union-find",
        solutionURL: "https://www.algoexpert.io/questions/union-find",
        patternList: ["Famous Algorithms"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Largest Island",
        questionURL: "https://www.algoexpert.io/questions/largest-island",
        solutionURL: "https://www.algoexpert.io/questions/largest-island",
        patternList: ["Graphs"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Prim's Algorithm",
        questionURL: "https://www.algoexpert.io/questions/prims-algorithm",
        solutionURL: "https://www.algoexpert.io/questions/prims-algorithm",
        patternList: ["Famous Algorithms"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Majority Element",
        questionURL: "https://www.algoexpert.io/questions/majority-element",
        solutionURL: "https://www.algoexpert.io/questions/majority-element",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Blackjack Probability",
        questionURL:
            "https://www.algoexpert.io/questions/blackjack-probability",
        solutionURL:
            "https://www.algoexpert.io/questions/blackjack-probability",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Evaluate Expression Tree",
        questionURL:
            "https://www.algoexpert.io/questions/evaluate-expression-tree",
        solutionURL:
            "https://www.algoexpert.io/questions/evaluate-expression-tree",
        patternList: ["Binary Trees"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Split Binary Tree",
        questionURL: "https://www.algoexpert.io/questions/split-binary-tree",
        solutionURL: "https://www.algoexpert.io/questions/split-binary-tree",
        patternList: ["Binary Trees"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Colliding Asteroids",
        questionURL: "https://www.algoexpert.io/questions/colliding-asteroids",
        solutionURL: "https://www.algoexpert.io/questions/colliding-asteroids",
        patternList: ["Stacks"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Median Of Two Sorted Arrays",
        questionURL:
            "https://www.algoexpert.io/questions/median-of-two-sorted-arrays",
        solutionURL:
            "https://www.algoexpert.io/questions/median-of-two-sorted-arrays",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Repair BST",
        questionURL: "https://www.algoexpert.io/questions/repair-bst",
        solutionURL: "https://www.algoexpert.io/questions/repair-bst",
        patternList: ["Binary Search Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Transpose Matrix",
        questionURL: "https://www.algoexpert.io/questions/transpose-matrix",
        solutionURL: "https://www.algoexpert.io/questions/transpose-matrix",
        patternList: ["Arrays"],
        difficulty: "EASY" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Reveal Minesweeper",
        questionURL: "https://www.algoexpert.io/questions/reveal-minesweeper",
        solutionURL: "https://www.algoexpert.io/questions/reveal-minesweeper",
        patternList: ["Recursion"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sweet And Savory",
        questionURL: "https://www.algoexpert.io/questions/sweet-and-savory",
        solutionURL: "https://www.algoexpert.io/questions/sweet-and-savory",
        patternList: ["Arrays"],
        difficulty: "MEDIUM" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Optimal Assembly Line",
        questionURL: "https://www.algoexpert.io/questions/optimalAssemblyLine",
        solutionURL: "https://www.algoexpert.io/questions/optimalAssemblyLine",
        patternList: ["Searching"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Largest Park",
        questionURL: "https://www.algoexpert.io/questions/largest-park",
        solutionURL: "https://www.algoexpert.io/questions/largest-park",
        patternList: ["Stacks"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Longest Most Frequent Prefix",
        questionURL:
            "https://www.algoexpert.io/questions/longest-most-frequent-prefix",
        solutionURL:
            "https://www.algoexpert.io/questions/longest-most-frequent-prefix",
        patternList: ["Tries"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Shortest Unique Prefixes",
        questionURL:
            "https://www.algoexpert.io/questions/shortest-unique-prefixes",
        solutionURL:
            "https://www.algoexpert.io/questions/shortest-unique-prefixes",
        patternList: ["Tries"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Strings Made Up Of Strings",
        questionURL:
            "https://www.algoexpert.io/questions/strings-made-up-of-strings",
        solutionURL:
            "https://www.algoexpert.io/questions/strings-made-up-of-strings",
        patternList: ["Tries"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
    {
        title: "Sum BSTs",
        questionURL: "https://www.algoexpert.io/questions/sum-bsts",
        solutionURL: "https://www.algoexpert.io/questions/sum-bsts",
        patternList: ["Binary Search Trees"],
        difficulty: "HARD" as Difficulty,
        popularity: "MEDIUM" as Popularity,
    },
];

async function main() {
    const leetResponse = await Promise.all(
        leetcodeProblems.map(
            async (problem) =>
                await prisma.leetcodeProblems.create({
                    data: problem,
                })
        )
    );
    console.log(leetResponse);

    const algoResponse = await Promise.all(
        algoExpertProblems.map(
            async (problem) =>
                await prisma.algoExpertProblems.create({
                    data: problem,
                })
        )
    );
    console.log(algoResponse);
}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
