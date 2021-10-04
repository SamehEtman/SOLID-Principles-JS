# Definition :
No client should be forced to depend on methods it does not use

# Problem statement :
Say we want to make a 3 in 1 printer that can be used as a scanner , fax and printer.
How will you go about designing such structure?

# Bad Approach :
As the principle states interfaces should be seperated but unfortunately Javascript doens't have interfaces so we will wrap around it as we will see.
First we need to make a Machine class interface that has abstract methods to print , fax and printer
```js 
class Machine {
  constructor() {
    if (this.constructor.name === 'Machine')
      throw new Error('Machine is abstract!');
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}
```
now the user wants a 3 in 1 printer let's define it as follows
```js
class MultiFunctionPrinter extends Machine {
  print(doc) {
    // code to print
  }

  fax(doc) {
    // code to fax
  }

  scan(doc) {
    // code to scan
  }
}
```
seems ok but what if another use wants to have a printer that only prints , bear in mind classes that inherets from interfaces must implement the abstract methods 
ok we can do some thing like that 
```js
class OldFashionedPrinter extends Machine {
  print(doc) {
    // ok
  }
   fax(doc) {
    // do nothing
   }

  scan(doc) {
    // do nothing
  }
}
```
but what happens when a user call fax function on this old fashioned printer, as you might guess it will do nothing but it exists and it shouldn't even exist in the first place which violates a principle called the **least surprise principle** (the user get surprised if he discovered that the old fashioned printer has a fax method ) , fax and scan methods shouldn't be allowed here.
So we might throw errors when these methods get called
# Better Approach :
A better approach is to make an interface for each functionality 
```js
class IPrinter {
  constructor() {
    if (this.constructor.name === 'Printer')
      throw new Error('Printer is abstract!');
  }
  print() {}
}
class IFax {
  constructor() {
    if (this.constructor.name === 'Printer')
      throw new Error('Printer is abstract!');
  }
  fax() {}
}
class IScanner {
  constructor() {
    if (this.constructor.name === 'Scanner')
      throw new Error('Scanner is abstract!');
  }
  scan() {}
}
```
now you can make multi functioning printer as follows
```js

class Photocopier extends aggregation(Printer, Scanner) {
  print() {
    // 
  }

  scan() {
    //
  }
}
```
un fotrunately Javascript doesn't support multible inhertance so we use outside help by this aggregation function its implementation is provided in the files.