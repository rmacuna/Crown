
# Crown. Pretty, Material and Simple

**v.0.1**

Crown it's a front-end framework for web-develop that uses a group of components based on material design with a custom variation. With Crown you can use diferent styles and make elegant websites.  

Crown uses material-icons so add this line in the head of your HTML code 

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Crown uses flexbox grid so read the complete DOCS of grid system  [here](http://flexboxgrid.com/)

Copy and paste this code for jQuery

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`

[Full Docs](https://rmacuna.github.io/Crown/)

[live preview](https://rmacuna.github.io/Crown/public) of this version

## Basic Docs

### Buttons

  You can use `<div>` or `<button>` tag depending what you need, here is an example code.
```HTML 
<div class="cr button">Button</div>
<button class="cr button">Button</button>
```
 You can also coloring this buttons adding the color class
 
 ```HTML 
<button class="cr button blue">Button</button>
<button class="cr button red">Button</button>
<button class="cr button green">Button</button>
<button class="cr button black">Button</button>
<button class="cr button indigo">Button</button>
```
![](https://lh3.googleusercontent.com/PI1xZDjQ6QjS5yp_gDgHHwqS9QtNsYhgQp_aRgEqz3YK2BaH4h_JpOj8x1OoJUSSPw_g6D4U__W17LjuXe7wNi6xezeDAFf2yvrJi81ZwWUJ9HBECAtQvuPk5_Scdr5hWJ9ZL8KwrQ)

 Buttons can also be styled with outline border and adding hover effects, you can use a button with a raised and ripple effect (like a Google material design button!)
 
 **Outline Buttons**

 ```HTML
<button class="cr button blue outline">Button</button>
<button class="cr button red outline ">Button</button>
```
**Raised Buttons**

* `hoverable` class allows a background animation in the button on hover. (Could be usefull and cool)
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

Use the simpler style of buttons adding the class `cr simple button` like this

```HTML
<button class="cr simple button indigo pulse">BUTTON</button>
``` 
and you will get this incredible button 
![](https://media.giphy.com/media/xUNda6dyPPtGRfqoJW/giphy.gif)


**Floating button** 

Floating buttons are very usefull when you are using a phone or a tablet. Use it adding this code 
```HTML
  <button class="cr button-float pulse">
      <i class="material-icons">add</i>
  </button
```

**Sizing** 

All cr buttons have diferent class that modifies the width and height, there are small, medium, large and adaptive buttons. This classes variate the width of the button but not the height, if you want more height add `big` class. 
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

  Crown buttons could have a `rounded` class in order to get a circle border.
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

  A label input is a variation of crown inputs that allows to have a label like a part of the input, which looks more elegant than normal label and replace the placeholder.
 ```HTML 
  <div class="cr input label">
    <div class="label">Name</div> 
    <input class="in-label"></input>
  </div>
```
 ![](https://lh3.googleusercontent.com/wZnq6hNSI5xJ_PLQy9bacwBHNq2L3LMWwzc4NZGOUf-pftqf3f2o1GtTjYAoERckh7gac43VlJkj63URg7Yk9jqsjwadztBBH7OAqSBSQa5DCVTOSiqjuGoovdV31ydyvRVlWbCvgA)
 
**Input Style**

  * You can set the input for dark backgrounds by adding ``dark-background`` class
  * You can change the color font of the input by adding the color-font class
  * You can change the outline color of the input by adding the color-outline 
  * Add the ``rounded`` class to get a input with a rounded border
  
  ```HTML
    <div class="cr input label">
      <div class="label">Name</div>
      <input class="in-label blue-outline blue-font dark-background"></input>
    </div>
  ```
  ***If You prefer the text in bold add the class ``bold`` to the input element***
  
  * If you add another ``div`` with class ``ender`` or a button with the same class you will get a pretty label at the end of the input.
  
  ```HTML
  <div class="cr input label">
      <div class="label">Name</div>
      <input class="in-label"></input>
      <div class="ender">.com</div>
  </div>
 <div class="cr input label">
      <div class="label">Name</div>
      <input class="in-label"></input>
      <button class="ender">Copy</button>
  </div>
```
Of course you can change the color of all enders and labels adding the color class that you want 

```HTML
  <div class="cr input label">
      <div class="label teal">Name</div>
      <input class="in-label"></input>
      <button class="ender teal">Copy</button>
  </div>
```
**Validation**
  
  Inputs brings a default validation (Only numbers and email) that you can trigger adding the class ``validate numbers`` or ``validate email``. Add a ``<span>``element to display the error or done icon.
  
  ```HTML 
    <div class="cr input basic">
      <input type="text" class="in-basic validate numbers">
      <span class="cr-message"></span>
    </div>
    <div class="cr input label">
      <input type="text" class="in-label validate numbers">
      <span class="cr-message"></span>
    </div>
  ```
  Take a look of this code that involves everything

  ```HTML 
   <div class="row">
        <div class="col-md-2">
            <div class="cr input label">
                <div class="label">Name</div>
                <input class="in-label validate numbers bold" type="text" name="">
                <span class="cr-message"></span>
            </div>
            <div class="cr input label">
                <div class="label">Email</div>
                <input id="input1" class="in-label validate email " type="text" name="">
                <button id="btnClear" class="ender teal">Clear</button>
                <span class="cr-message"></span>
            </div>
        </div>
    </div>

   <div class="row">
        <div class="col-md-2">
            <div class="cr button indigo hoverable pulse rounded">Calculate</div>
        </div>
    </div>

  ```
  ```JavaScript  
      $("#btnClear").click(function(){
            $("#input1").val("");
      })
  ```
  
  ![](https://media.giphy.com/media/xUNda1GZOTmVzlMZqg/giphy.gif)


**Material Inputs**

  Crown implements material inputs too
  
```HTML 
     <div class="cr-material-field ">
          <label class="m-label">Name</label>
          <input class="m-input" type="text" name="">
     </div>
```
  The color of the input it's by default the accent of the application ([See full DOCS to see how to modify with SASS](https://rmacuna.github.io/Crown/public)), but you can change it adding the color class, it's really simple!.
  
```HTML 
     <div class="cr-material-field indigo">
          <label class="m-label">Name</label>
          <input class="m-input" type="text" name="">
     </div>
     
      <div class="cr-material-field blue">
          <label class="m-label">Name</label>
          <input class="m-input" type="text" name="">
     </div>
     
      <div class="cr-material-field black">
          <label class="m-label">Name</label>
          <input class="m-input" type="text" name="">
     </div>
```
You can add custom validation messages unlike input basic or input-label, using de attr ``data-error``and ``data-positive``

```HTML 
  <div class="cr-material-field black">
        <label class="m-label">Name</label>
        <input class="m-input validate numbers" type="text" name="">
        <span data-positive="Good, it's a number" data-error="This is not a number" class="m-state"></span>
  </div>
```

The message of error or positive action it will only be shown on validation numbers or validation email. For a custom validation you must trigger the message with this script.

```JavaScript

  $(#myInput).blur(function(){
    if(conditionOfValidation == true ){
      $("#theIdOfSpanElement").valMessage('show', 'positive');
    }else{
      $("#theIdOfSpanElement").valMessage('show', 'negative')
    }
  });
  
  //Or Just Show Positive or Just show negative actions else hide the message

  $(#myInput).blur(function(){
    if(conditionOfValidation == true ){
      $("#theIdOfSpanElement").valMessage('hide');
    }else{
      $("#theIdOfSpanElement").valMessage('show', 'positive');

    }
  });

``` 
![](https://media.giphy.com/media/3ohjUQbImEG4Jobp0k/giphy.gif)

Full docs have more information


**SnackBar** 

  Snacks are usefull to display short messages or perfom a simple action. Add this line to your HTML code 
```HTML 
  <div id="the_ID_you_want" class="cr snackbar">
    <div class="snack-message"></div>
  </div>
```
Then, add the following script 

```JavaScript
$("#snack1").snackbar("show", "The short Message", delayTime);
```
This will trigger the snack on page load so use it with a click event instead

```JavaScript
$("#buttonID").click(function(){
  $("#snack1").snackbar("show", "The short Message");
});
```

You can add a button with a custom action on click or use the default UNDO class that close the snack 

```HTML 
  <div id="the_ID_you_want" class="cr snackbar">
    <div class="snack-message"></div>
    <button class="snack-action undo">UNDO</div>
  </div>

```
And yes, you can change the color of this snack adding the color-class 

![](https://media.giphy.com/media/26FffBuJQOMoi8B6o/giphy.gif)

**Checkbox**

  There are two diferent crown checkbox, the variant checkbox and normal checkbox. 
  
```HTML
     <div class="cr checkbox ">
           <input type="checkbox" name="in1">
           <label for="in1">CheckBox</label>
     </div>  
      <div class="cr checkbox variant ">
           <input type="checkbox" name="in1">
           <label for="in1">CheckBox</label>
     </div>  
```
  
  Add the class ``pulse`` and add ``span`` element with same class to get a ripple effect, and of course you can change the color adding the color class. (The default color is the accent of the aplication).
  
```HTML
     <div class="cr checkbox blue pulse ">
           <input type="checkbox" name="in1">
           <label for="in1">CheckBox</label>
            <span class="pulse"></span>
     </div>  
      <div class="cr checkbox variant blue pulse">
           <input type="checkbox" name="in1">
           <label for="in1">CheckBox</label>
           <span class="pulse"></span>
     </div>  

```
  
**Radio Buttons** 

  As checkboxes, radio-buttons have a variant and pulse effect and the same color styling 
  
```HTML
       <div class="cr radio-button blue pulse">
             <input type="radio" name="c1">
             <label for="c1">RadioButton</label>
             <span class="pulse"></span>
       </div>
         <div class="cr radio-button variant blue pulse">
             <input type="radio" name="c1">
             <label for="c1">RadioButton</label>
             <span class="pulse"></span>
       </div>
 ```
  
**Cards**
  
  Crown card uses three sub-classes. The card-head, card-body and card-footer. Another sub-class is the img-section usefull for img content. The head,body and footer can be colored adding the color class to the element.
  
```HTML  
     <div class="cr card ">
           <div class="card-head">Hi</div>
           <div class="card-body">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore                          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
           </div>
           <div class="card-footer indigo">
               <button class="cr button simple white pulse">Action</button>
          </div>
     </div>
```
  
  
 Sizing the card it's very simple, just add the class small, medium or use adaptive to fit the container. You can remove the raise effect adding the class noraise 
 
```HTML  
     <div class="cr card adaptive noraise">
            <div class="card-head">Card 1</div>
            <div class="card-body">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
             <div class="card-footer">
                <button class="cr button simple adaptive pulse ">Action</button>
             </div>
     </div>
```

By default, cards brings  material desing so, for Crown custom cards add the class ``variant`` to get a different card style. 


 

**Images**

  For a responsive image  use the class img-section
  
```HTML  
     <div class="cr card adaptive noraise">
            <div class="card-head">Card 1</div>
            <div class="img-section">
                <img src="../img/dog.png">
            </div>
            <div class="card-body">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
             <div class="card-footer">
                <button class="cr button simple adaptive pulse ">Action</button>
             </div>
     </div>
```

Add the class ``dark-bg``for a dark card.


![](https://lh3.googleusercontent.com/sOPasFnnIRSwYZVwsf2LzfPdvpEa5PjE9YyE377tD8TYZh4-CiXrJ0JNmiKs8V31Ngmk9Wp46RTBisjUJ-mlpQCVV_AdIGG75k3G0emHYEJvSeYvq90h2-C2XP7zg7lOF6lKhzlmqQ)


By default, cards brings  material desing so, for Crown custom cards add the class ``variant`` to get a different card style.

**Features** 

Show or hide a feature in card-images. Just add the ``img-section`` and then a div with class ``cr feature`` with a child div ``content``. 

```HTML 
 <div class="cr card variant">
      <div class="card-head">So far away </div>
           <div class="img-section">
              <img id="img1" src="https://i.scdn.co/image/93b35ff46a64bbe150ef63c8656cc0c137e4960f" alt="">
              <div id="myID" class="cr feature">
                  <div class="content center ">
                      <div class="row">
                          <div class="col-xs-12 col-md-6">
                              <button class="cr outline button green adaptive">Replay</button>
                          </div>
                          <div class="col-xs-12 col-md-6">
                              <button class="cr outline button green adaptive">Pause</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
      <div class="card-body text-center ">
          So far away, it's a song produced by Martin Garrix and David Guetta released on December 1, 2017.
      </div>
      <div class="card-footer ">
          <button class="cr simple button  adaptive pulse">NEXT</button>
      </div>
 </div>

```

```JavaScript 
//Activate the feature
  $('#myID').feature('on');

//Disable the feature 
  $('#myID').feature('off');
```


**Cakes** 

  It's a new component implemented by crown, it's a variation of a card but with standarts dimentions and a circle shape. Cakes are created for show short content not for long text. See how it looks.

  ![](https://lh3.googleusercontent.com/z44aYz6NcsZUnum_4lo8r7PtHleu4HJMYrDG6_maW3EeUbNTtkZPh7jZhpTAqH8VqLghZkpPLNAsE01o9TgeTtHqJfUdwyKmlxTAXpc_5jdtgfjMSuBcYP7vQgCpKJ0h0Qc79Rc5WQ)

  As you see, supports a background image or icons. The component display the message (if you want) increasing the dimentions.

  ![](https://media.giphy.com/media/3ohjV3Ehm7SiONY2Y0/giphy.gif)

  You can customize the background of the cake adding the color class.


  This is the code of a cr cake 
    
```HTML 

<!-- With image  -->

<div class="cake black">
      <div class="content ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, necessitatibus. Sunt numquam a, expedita vel repellat quos, soluta quidem. Quos officiis delectus nostrum nisi officia rerum, aliquid vitae et ad.
          Lorem ipsum dolor sit amet, consectetur adipisic
      </div>
      <img class="rounded fade " src="https://i.scdn.co/image/93b35ff46a64bbe150ef63c8656cc0c137e4960f">
</div>

<!-- With icon --> 

<div class="cake black">
      <div class="content ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, necessitatibus. Sunt numquam a, expedita vel repellat quos, soluta quidem. Quos officiis delectus nostrum nisi officia rerum, aliquid vitae et ad.
          Lorem ipsum dolor sit amet, consectetur adipisic
      </div>
      <i class="material-icons">code</i>
</div>


```

To get a shake effect add the class ``shake-1`` for a continue shake animation of the icon or image, ``shake-2`` to get a shake animation on hover.

**Chips**
  
  ```HTML 
  <div class="cr chip purple">
      <div class="content">Solid</div>
      <i class="material-icons">close</i>
  </div>
  ```
  By default, using the icon close automatically close and delete the tag from the DOM

  
**Modals**
  To use modals put it them inside a cr container div, then add this code

```HTML 

 <div class="cr modal small">
            <i class="material-icons close">close</i>
            <div class="modal-head center">Login</div>
            <div class="modal-body ">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="cr-material-field">
                            <label class="m-label">Username</label>
                            <input class="m-input" type="text" name="in1">
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-12">
                        <div class="cr-material-field">
                            <label class="m-label" for="in2">Password</label>
                            <input class="m-input" type="password" name="in2">
                        </div>
                    </div>
                </div>        
            </div>
            <div class="modal-footer no-line center">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <button class="cr simple button green pulse adaptive">REGISTER</button>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <button class="cr simple button green pulse adaptive">LOGIN</button>
                    </div>
                </div>
            </div>
  </div>

```
  Ass you see, modals uses a header a body and a footer in order to get a formated modal, you can use the modal without these three components, but i'ts not recommended. Here's another actions: 

  * Add a close icon that works adding ``<i class="material-icons close">close</i> ``
  * Modify the size of the modal by adding small, medium or big class
  * Add an scroll content by adding the class ``scroll-content``
  * Coloring the head, body and footer adding the color class 
  * Add ``dark-bg``to get a dark modal 
  * Add a deep shadow effect adding the class ``shadow``
  * Add the class ``center`` in the head,body or footer to get a centered text 

```JavaScript 

//Show the modal
  $(#yourModalID).modal('show');

//Hide the modal 
  $(#yourModalID).modal('hide');

```
 **List** 
 
 Use Crown list by adding this code: 
 
 ```HTML 
<ul class="cr list">
  <li>Dogs</li>
  <li>Cats</li>
  <li>Humans</li>
</ul>

```
This is the basic list that you can use just to display a list of components. Customize by adding the color class, or make it complex adding an icon or image section. Or display hidden content creating a ``li info``.

