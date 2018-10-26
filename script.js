class Grid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 4
        this.numberOfColumns = options.numberOfColumns || 5
        this.gridContainer = document.getElementById(options.parentContainerId)
        this.elementId = options.elementId
        this.createRows()
        this.createGridElement()
    }

    createGridElement() {
        this.element = document.createElement("div")
        this.element.id = this.elementId
    }

    createRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("section")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new Cell(rowIndex, columnIndex, this.rowElement)
                this.rowArray.push(cell)
            }
        }
        console.log(this.gridArray)
    }
}

class Cell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.cellArray = []
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.id = `${rowIndex} , ${columnIndex}`
        this.createCell()
    }
    createCell() {
        this.cellElement = document.createElement("article")
        this.rowParent.appendChild(this.cellElement)
    }
}
