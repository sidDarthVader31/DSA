
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
function smallestSufficientTeam(req_skills, people) {
    const m = req_skills.length;

    // 1⃣ Map each skill to a unique index (bit position)
    const skillIndex = new Map();
    req_skills.forEach((skill, i) => skillIndex.set(skill, i));

    // 2⃣ Convert each person’s skills into a bitmask
    const peopleMasks = people.map(skills =>
        skills.reduce((mask, skill) =>
            mask | (1 << skillIndex.get(skill)), 0
        )
    );

    // 3⃣ DP array: dp[mask] stores the *smallest team* (list of people indices) that covers 'mask'
    const dp = new Array(1 << m).fill(null);
    dp[0] = [];  // no skills requires no people

    // 4⃣ Build DP
    for (let i = 0; i < people.length; i++) {
        const pMask = peopleMasks[i];
        if (pMask === 0) continue;  // skip if person brings no new skills

        // Loop through all existing masks
        for (let existingMask = 0; existingMask < (1 << m); existingMask++) {
            if (dp[existingMask] === null) continue;

            const comb = existingMask | pMask;
            // If this new team is better (smaller) than current
            if (dp[comb] === null || dp[comb].length > dp[existingMask].length + 1) {
                dp[comb] = [...dp[existingMask], i];
            }
        }
    }

    // 5⃣ Full skills mask = all required skills covered
    const fullMask = (1 << m) - 1;
    return dp[fullMask];
}
