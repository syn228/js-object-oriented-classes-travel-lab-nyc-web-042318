class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}



class Route{
  constructor(start, end){
    this.start = start;
    this.end = end
  }
  blocksTravelled(){
    if (this.start.horizontal === 'Park'){
      this.start.horizontal = 5;
    };
    if (this.end.horizontal === 'Park'){
      this.end.horizontal = 5;
    };
    let v = Math.abs(parseInt(this.start.vertical) - parseInt(this.end.vertical));
    let h = Math.abs(parseInt(this.start.horizontal) - parseInt(this.end.horizontal));
    return h+v;
  }
  estimatedTime(boolean){
    let a = this.blocksTravelled()
    if (boolean){
      return a/2
    } else
    return a/3
  }
}
