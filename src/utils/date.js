
function date(fecha){
    const [year, month, day] = fecha
                                .split("T")[0]
                                .split("-")
    return `${day}-${month}-${year}`
  }

export default date