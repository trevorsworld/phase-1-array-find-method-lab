function superbowlWin(superbowlResults) {
    const winningYear = superbowlResults.find(result => result.result === "W");
    return winningYear ? winningYear.year : undefined;
}

const superbowlResults = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" }
];

console.log(superbowlWin(superbowlResults));
