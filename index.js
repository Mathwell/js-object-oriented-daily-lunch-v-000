// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId=0;
let customerId=0;
let mealId=0;
let deliveryId=0;

class Neighborhood{
  constructor(name){
    this.name=name;
    this.id=neighborhoodId++;
    store.neighborhoods.push(this)
  }
}

class Meal{
constructor(title,price){
  this.title=title;
  this.price=price;
  this.id=mealId++;
  store.meals.push(this)
}

}

class Customer{
  constructor(name,neighborhood){
    this.name=name;
    this.id=customerId++;
    this.neighborhoodId=neighborhood.id
    store.customers.push(this);
  }

}

class Delivery{
  constructor(meal,customer,neighborhood){
    this.mealId=meal;
    this.customerId=customer.id
    this.neighborhoodId=neighborhood.id
    this.id=deliveryId++;
    store.deliveries.push(this)
  }

}
