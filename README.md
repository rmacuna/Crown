
# Crown. Pretty, Material and Simple

**v.0.1**

Crown it's a private(**For now**) front-end framework for web-develop that uses a group of components based on material design with a variation of material-design standarts components. With Crown you can use diferent styles and make websites with an elegant design.  

Crown uses material-icons so use it by adding this line on your HTML code 

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`



See the [live preview](https://github.com/rmacuna/Crown/edit/master/README.md) of this version

## Basic Docs

### Buttons

  You could use `<div>` or `<button>` tag depending what you need, here is an example of how basic buttons looks.
```HTML 
<div class="cr button">Button</div>
<button class="cr button">Button</button>

```
 You can also coloring these buttons adding the color class
 
 ```HTML 
<button class="cr button blue">Button</button>
<button class="cr button red">Button</button>
<button class="cr button green">Button</button>
<button class="cr button black">Button</button>
<button class="cr button indigo">Button</button>
```
![](https://lh3.googleusercontent.com/PI1xZDjQ6QjS5yp_gDgHHwqS9QtNsYhgQp_aRgEqz3YK2BaH4h_JpOj8x1OoJUSSPw_g6D4U__W17LjuXe7wNi6xezeDAFf2yvrJi81ZwWUJ9HBECAtQvuPk5_Scdr5hWJ9ZL8KwrQ)

 Buttons can also be styled with outline border and adding hover effects, you can also have a button with a raised and ripple effect (like a Google material design button!)
 
 **Outline Buttons**
 ```HTML
<button class="cr button blue outline">Button</button>
<button class="cr button red outline ">Button</button>
```
**Raised Buttons**

* Notice that class `hoverable` allows a background animation in the button on hover. (Could be usefull and cool)
```HTML
<button class="cr button green raised hoverable">Button</button>
<button class="cr button black raised hoverable">Button</button>
```
**Pulse Effect**

If you want the ripple effect just add the class `pulse` and then you will have a pretty wave effect on click

```HTML
<button class="cr button indigo raised pulse ">Button</button>
```
![](https://media.giphy.com/media/xT1R9z6C6C4cNZHXnG/giphy.gif)

**Simple crown button** 

You can also use the simple way of buttons adding the class `cr simple button` like this

```HTML
<button class="cr simple button indigo pulse">BUTTON</button>
``` 
and you will get this incredible and simple button 
![](https://media.giphy.com/media/xUNda6dyPPtGRfqoJW/giphy.gif)


**The floating button way** 

Floating buttons are very usefull when you are using a phone or a tablet. You could use it like this 
```HTML
  <button class="cr button-float pulse">
  <i class="material-icons">add</i>
  </button
```

**Sizing** 

All cr buttons have diferent class that modifies the width and height, there are small, medium, large and adaptive buttons. This classes variate the width of the button but no the height, for more height add `big` class. Look the code here: 
```HTML 
<button class="cr button small">Button</button>
<button class="cr button medium">Button</button>
<button class="cr button large">Button</button>
<button class="cr button adaptive">Button</button>
<button class="cr button big small">Button</button>
<button class="cr button big medium ">Button</button>
<button class="cr button big large">Button</button>
<button class="cr button big adaptive">Button</button>
```

**Other variations** 

  crown buttons could have a `rounded` class in order to get a rounded cool button 
```HTML
  <button class="cr button rounded pink">Button</button>
```

More variations of buttons will be added in other releases 

### Inputs

Crown inputs uses three diferent styles that includes basic inputs, labeled inputs and material inputs. You can use it depending what are you looking for.


**Basic Input**

  Use this code for basic inputs
 ```HTML 
  <div class="cr input basic">
    <label>Name</label> 
    <input placeholder="Your Name" class="in-basic"></input>
  </div>
```
![](https://lh3.googleusercontent.com/qXSIKskoFFxp3LoiD6pxu6BjwJIMYeT5jjCxRO2-SDIFm4ERfZJLypvDzKJgA9hSxrO6OkFnMwLVOV-GU55xJpeKHsZZoEoHjNp32kCvk0t7Qqu4GuzGf-24SWyAdDs6vgwSPs-S6w)

**Label input** 

  A label input is a variation of crown inputs that allows to have a label like a part of the input, which looks more elegant that normal label and replace the placeholder perfectly.
 ```HTML 
  <div class="cr input label">
    <div class="label">Name</div> 
    <input class="in-label"></input>
  </div>
```
 ![](https://lh3.googleusercontent.com/wZnq6hNSI5xJ_PLQy9bacwBHNq2L3LMWwzc4NZGOUf-pftqf3f2o1GtTjYAoERckh7gac43VlJkj63URg7Yk9jqsjwadztBBH7OAqSBSQa5DCVTOSiqjuGoovdV31ydyvRVlWbCvgA)
  
