function printToPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}


function animalsQuestion() {

    fetch("http://jservice.io/api/category?id=260")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)


        })

}

function natureQuestion() {
    fetch("http://jservice.io/api/category?id=155")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)

        })
}

function fourLetterQuestion() {
    fetch("http://jservice.io/api/category?id=139")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)

        })
}

function aroundTheWorldQuestion() {
    fetch("http://jservice.io/api/category?id=1079")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)

        })
}

function bodylanguageQuestion() {
    fetch("http://jservice.io/api/category?id=105")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)

        })
}

function museumQuestion() {
    fetch("http://jservice.io/api/category?id=539")
        //museum
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('The category is ' + newTitle)

        })
}
class jeopardyGrid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()

    }


    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new jeopardyCell(rowIndex, columnIndex, this.rowElement)
                    // cell.id = "cell" + (String(columnIndex))
                this.rowArray.push(cell)


            }
        }
    }
}

class jeopardyCell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.cellClasses = this.cellClasses
        this.createCell()
    }
    createCell() {
        this.cell = document.createElement("span")
        this.rowParent.appendChild(this.cell)
        this.cell.id = "cell" + (String(this.columnIndex))
        this.cell.classList.add("row" + (String(this.rowIndex)))
    }
}


// const one = new jeopardyCell

const grid = new jeopardyGrid({

})

let categoryOne = document.getElementById("cell0")
categoryOne.innerText = "Animals"
categoryOne.addEventListener("click", animalsQuestion);


let categoryTwo = document.getElementById("cell1")
categoryTwo.innerText = "Nature"
categoryTwo.addEventListener("click", natureQuestion)


let categoryThree = document.getElementById("cell2")
categoryThree.innerText = "Around the World"
categoryThree.addEventListener("click", aroundTheWorldQuestion)

let categoryFour = document.getElementById("cell3")
categoryFour.innerText = " Four letter Words"
categoryFour.addEventListener("click", fourLetterQuestion)

let categoryFive = document.getElementById("cell4")
categoryFive.innerText = "Body Language"
categoryFive.addEventListener("click", bodylanguageQuestion)


let categorySix = document.getElementById("cell5")
categorySix.innerText = "Museums"
categorySix.addEventListener("click", museumQuestion)

