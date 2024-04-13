var board = [null,null,null,null,null,null,null,null,null];
const ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const player = "X";
const computer = "O";
var onturn = player;
var end = false;
var score_board = {"X":0, "O":0}

function reset() {
    if (end) {
        if (result() == "D"){

        } else {
            score_board[onturn]++;
            document.getElementById(onturn+"_box").innerHTML = score_board[onturn];
        }
        document.getElementById("output").innerHTML = "";
        document.getElementById("turns").innerHTML = turn();
        end = false;
        for (let index = 0; index < ids.length; index++) {
            board[index] = null;
            document.getElementById(ids[index]).innerHTML="";
        }
        if (onturn==computer) {
            compute();
        }

    }
}

function turn() {
    if (onturn == player ) {
        onturn = computer;
        compute(); 
        return "computer turn";
    } else {
        onturn = player;
        return "player turn";
    }
}

function compute() {
    if (!end) {
        do {
            var move = Math.floor(Math.random() * 9);
        } while (!(board[move] == null));
        var position = move;
        var id = ids[move];
        body(position, id);
    }
}

function check(position) {
    if (board[position] == null) {
        return true;
    } else {
        return false;
    }
}

function result() {
    if (board[0] == onturn && board[1] == onturn && board[2] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[3] == onturn && board[4] == onturn && board[5] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[6] == onturn && board[7] == onturn && board[8] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[0] == onturn && board[3] == onturn && board[6] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[1] == onturn && board[4] == onturn && board[7] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[2] == onturn && board[5] == onturn && board[8] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[0] == onturn && board[4] == onturn && board[8] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (board[2] == onturn && board[4] == onturn && board[6] == onturn) {
        console.log ("you win");
        return onturn;
    } else if (!board.includes(null)) {
        console.log ("you draw");
        return "D";
    } 
}

function body(position, id) {

    if ( check(position) && !end) {
        console.log(onturn);
        var text = document.createTextNode(onturn);
        document.getElementById(id).appendChild(text);
        board[position] = onturn;
        if (res = result()) {
            if ("D" == res) {
                res = "It's a draw the game";
            } else {
                res = onturn + "'s win the game";
            }
            document.getElementById("turns").innerHTML = res;
            document.getElementById("output").innerHTML = "Do you still want to play again:";
            end = true;
        } else {
            document.getElementById("turns").innerHTML = turn();
        }
    }
    
}


function button1() {
    var position = 0;
    var id = "one";
    body(position, id);
}

function button2() {
    var position = 1;
    var id = "two";
    body(position, id);
}

function button3() {
    var position = 2;
    var id = "three";
    body(position, id);
}

function button4() {
    var position = 3;
    var id = "four";
    body(position, id);
}

function button5() {
    var position = 4;
    var id = "five";
    body(position, id);
}

function button6() {
    var position = 5;
    var id = "six";
    body(position, id);
}

function button7() {
    var position = 6;
    var id = "seven";
    body(position, id);
}

function button8() {
    var position = 7;
    var id = "eight";
    body(position, id);
}

function button9() {
    var position = 8;
    var id = "nine";
    body(position, id);
}
