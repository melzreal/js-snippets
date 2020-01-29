class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'London';
    }

    getLocationData(){
        console.log(localStorage)
        if((localStorage.getItem('city') === null ) || (localStorage.getItem('city') === '' ) ||
         (localStorage.getItem('city') === '' )){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city', city);
    }
}