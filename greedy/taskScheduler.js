/**
 * link : https://leetcode.com/problems/task-scheduler/description/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let heap = [];
    const map = {};

    // Count frequencies
    for (const task of tasks) {
        if (map[task] === undefined) {
            map[task] = heap.length;
            heap.push({ task: task, count: 1, last: -Infinity }); // last = -Infinity initially
        } else {
            heap[map[task]].count++;
        }
    }

    let time = 0;       // actual clock
    let taskCount = 0;  // tasks completed

    while (taskCount < tasks.length) {
        // sort by highest count remaining
        heap.sort((a, b) => b.count - a.count);

        let scheduled = false;

        for (let i = 0; i < heap.length; i++) {
            let element = heap[i];

            // check cooldown
            if (element.count > 0 && time - element.last > n) {
                element.count--;
                element.last = time;
                taskCount++;
                scheduled = true;
                break;
            }
        }

        time++; // always tick forward (whether idle or working)
    }

    return time;
};
