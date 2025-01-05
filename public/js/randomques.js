function displaySelection() {
    var topic = document.getElementById('topic-select').value;
    var level = document.getElementById('level-select').value;
    document.getElementById('output').innerHTML = `The following question is of ${topic} of difficulty level ${level}.`;

    if (topic==="Array" && level==="Easy") {
        const questions = [
            "Problem statement: You have been given an integer array/list(ARR) of size 'N'. It only contains 0s, 1s and 2s. Write a solution to sort this array/list. Note: Try to solve the problem in 'Single Scan'. ' Single Scan' refers to iterating over the array/list just once or to put it in other words, you will be visiting each element in the array/list just once.",
            "Problem statement: You are given an array of integers 'ARR' containing N elements. Each integer is in the range [1, N-1], with exactly one element repeated in the array. Your task is to find the duplicate element. The duplicate element may be repeated more than twice in the error, but there will be exactly one element that is repeated in the array. Note : All the integers in the array appear only once except for precisely one integer which appears two or more times.",
            "Problem statement: Given an array A of n non negative numbers. The task is to find the first equilibrium point in an array. Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it. Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. ",
            "Problem statement: Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5]..... If there are multiple solutions, find the lexicographically smallest one. Note: The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.",
            "Problem statement: Given a sorted array a[] of size n, delete all the duplicated elements from a[] & modify the array such that only distinct elements should be present there. Note: 1. Don't use set or HashMap to solve the problem. 2. You must return the modified array size where only distinct elements are present in the array, the driver code will print all the elements of the modified array."
        ];

    function getRandomGreeting() {
        const index = Math.floor(Math.random() * questions.length);
        console.log(questions[index]);
        return questions[index];

    }

    // Display the random greeting
    const greeting = getRandomGreeting();
    document.getElementById('question').textContent = greeting;
    }

    else if (topic==="Array" && level==="Moderate") {
        const questions = [
            "Problem statement: Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray. In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.",
            "Problem statement: Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element. Note: Return -1 if you can't reach the end of the array.",
            "Problem statement: Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array. It is given that all array elements are distinct. Note:-  l and r denotes the starting and ending index of the array.",
            "Problem statement: Given an array of integers. Find the Inversion Count in the array. Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.",
            "Problem statement: Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting. Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms."
        ];

    function getRandomGreeting() {
        const index = Math.floor(Math.random() * questions.length);
        console.log(questions[index]);
        return questions[index];

    }

    // Display the random greeting
    const greeting = getRandomGreeting();
    document.getElementById('question').textContent = greeting;
    }

    else if (topic==="Stack" && level==="Hard") {
        const questions = [
            "Problem statement: Find the largest rectangular area possible in a given histogram where the largest rectangle can be made of a number of contiguous bars. For simplicity, assume that all bars have the same width and the width is 1 unit, there will be N bars height of each bar will be given by the array arr.",
            "Problem statement: Given a string S consisting of opening and closing parenthesis '(' and ')'. Find length of the longest valid parenthesis substring. A parenthesis string is valid if: For every opening parenthesis, there is a closing parenthesis. Opening parenthesis must be closed in the correct order.",
            "Problem statement: Given a valid expression containing only binary operators '+', '-', '*', '/' and operands, remove all the redundant parenthesis. A set of parenthesis is said to be redundant if, removing them, does not change the value of the expression. Note: The operators '+' and '-' have the same priority. '*' and '/' also have the same priority. '*' and '/' have more priority than '+' and '-'.",
            "Problem statement: You have to send an encrypted message in the form of string S to his friend Keeg along with instructions on how to decipher the message. To decipher the message, his friend needs to iterate over the message string from left to right, if he finds a '*', he must remove it and add all the letters read so far to the string. He must keep on doing this till he gets rid of all the '*'. Can you help Geek encrypt his message string S? Note: If the string can be encrypted in multiple ways, find the smallest encrypted string. ",
            "Problem statement: Given an integer array. The task is to find the maximum of the minimum of every window size in the array. Note: Window size varies from 1 to the size of the Array."
        ];

    function getRandomGreeting() {
        const index = Math.floor(Math.random() * questions.length);
        console.log(questions[index]);
        return questions[index];

    }

    // Display the random greeting
    const greeting = getRandomGreeting();
    document.getElementById('question').textContent = greeting;
    }


};

