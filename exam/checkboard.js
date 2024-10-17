const board = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "R", "", "", "", "*"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "K", "", "", "*"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
];

let rowR = 0, columnR = 0;
let rowK = 0, columnK = 0;


for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === "R") {
            rowR = i;
            columnR = j;
        }
        if (board[i][j] === "K") {
            rowK = i;
            columnK = j;
        }
    }
}

function isKingInCheck(rowR, columnR, rowK, columnK, board) {
    
    if (rowR === rowK) {
        let start = Math.min(columnR, columnK) + 1;
        let end = Math.max(columnR, columnK);
        for (let j = start; j < end; j++) {
            if (board[rowR][j] !== "") {
                return false; 
            }
        }
        return true; 
    }

    
    if (columnR === columnK) {
        let start = Math.min(rowR, rowK) + 1;
        let end = Math.max(rowR, rowK);
        for (let i = start; i < end; i++) {
            if (board[i][columnR] !== "") {
                return false; 
            }
        }
        return true; 
    }

    return false; 
}


if (isKingInCheck(rowR, columnR, rowK, columnK, board)) {
    console.log("CHECK!");
} else {
    console.log("King is Safe"); 
}