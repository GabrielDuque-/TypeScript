//// [commentsFormatting.ts]

module m {
    /** this is first line - aligned to class declaration
* this is 4 spaces left aligned
 * this is 3 spaces left aligned
  * this is 2 spaces left aligned
   * this is 1 spaces left aligned
    * this is at same level as first line
     * this is 1 spaces right aligned
      * this is 2 spaces right aligned
       * this is 3 spaces right aligned
        * this is 4 spaces right aligned
         * this is 5 spaces right aligned
          * this is 6 spaces right aligned
           * this is 7 spaces right aligned
            * this is 8 spaces right aligned */
    export class c {
    }

        /** this is first line - 4 spaces right aligned to class but in js file should be aligned to class declaration
* this is 8 spaces left aligned
 * this is 7 spaces left aligned
  * this is 6 spaces left aligned
   * this is 5 spaces left aligned
    * this is 4 spaces left aligned
     * this is 3 spaces left aligned
      * this is 2 spaces left aligned
       * this is 1 spaces left aligned
        * this is at same level as first line
         * this is 1 spaces right aligned
          * this is 2 spaces right aligned
           * this is 3 spaces right aligned
            * this is 4 spaces right aligned
             * this is 5 spaces right aligned
              * this is 6 spaces right aligned
               * this is 7 spaces right aligned
                * this is 8 spaces right aligned */
    export class c2 {
    }

    /** this is comment with new lines in between

this is 4 spaces left aligned but above line is empty

 this is 3 spaces left aligned but above line is empty

  this is 2 spaces left aligned but above line is empty

    this is 1 spaces left aligned but above line is empty

    this is at same level as first line but above line is empty 

     this is 1 spaces right aligned but above line is empty

      this is 2 spaces right aligned but above line is empty

       this is 3 spaces right aligned but above line is empty

        this is 4 spaces right aligned but above line is empty
    
    
    Above 2 lines are empty
    
    
    
    above 3 lines are empty*/
    export class c3 {
    }
}

//// [commentsFormatting.js]
var m;
(function (m) {
    /** this is first line - aligned to class declaration
* this is 4 spaces left aligned
 * this is 3 spaces left aligned
  * this is 2 spaces left aligned
   * this is 1 spaces left aligned
    * this is at same level as first line
     * this is 1 spaces right aligned
      * this is 2 spaces right aligned
       * this is 3 spaces right aligned
        * this is 4 spaces right aligned
         * this is 5 spaces right aligned
          * this is 6 spaces right aligned
           * this is 7 spaces right aligned
            * this is 8 spaces right aligned */
    var c = (function () {
        function c() {
        }
        return c;
    })();
    m.c = c;
    /** this is first line - 4 spaces right aligned to class but in js file should be aligned to class declaration
* this is 8 spaces left aligned
* this is 7 spaces left aligned
* this is 6 spaces left aligned
* this is 5 spaces left aligned
* this is 4 spaces left aligned
 * this is 3 spaces left aligned
  * this is 2 spaces left aligned
   * this is 1 spaces left aligned
    * this is at same level as first line
     * this is 1 spaces right aligned
      * this is 2 spaces right aligned
       * this is 3 spaces right aligned
        * this is 4 spaces right aligned
         * this is 5 spaces right aligned
          * this is 6 spaces right aligned
           * this is 7 spaces right aligned
            * this is 8 spaces right aligned */
    var c2 = (function () {
        function c2() {
        }
        return c2;
    })();
    m.c2 = c2;
    /** this is comment with new lines in between

this is 4 spaces left aligned but above line is empty

 this is 3 spaces left aligned but above line is empty

  this is 2 spaces left aligned but above line is empty

    this is 1 spaces left aligned but above line is empty

    this is at same level as first line but above line is empty

     this is 1 spaces right aligned but above line is empty

      this is 2 spaces right aligned but above line is empty

       this is 3 spaces right aligned but above line is empty

        this is 4 spaces right aligned but above line is empty
    
    
    Above 2 lines are empty
    
    
    
    above 3 lines are empty*/
    var c3 = (function () {
        function c3() {
        }
        return c3;
    })();
    m.c3 = c3;
})(m || (m = {}));


//// [commentsFormatting.d.ts]
declare module m {
    /** this is first line - aligned to class declaration
* this is 4 spaces left aligned
 * this is 3 spaces left aligned
  * this is 2 spaces left aligned
   * this is 1 spaces left aligned
    * this is at same level as first line
     * this is 1 spaces right aligned
      * this is 2 spaces right aligned
       * this is 3 spaces right aligned
        * this is 4 spaces right aligned
         * this is 5 spaces right aligned
          * this is 6 spaces right aligned
           * this is 7 spaces right aligned
            * this is 8 spaces right aligned */
    class c {
    }
    /** this is first line - 4 spaces right aligned to class but in js file should be aligned to class declaration
* this is 8 spaces left aligned
* this is 7 spaces left aligned
* this is 6 spaces left aligned
* this is 5 spaces left aligned
* this is 4 spaces left aligned
 * this is 3 spaces left aligned
  * this is 2 spaces left aligned
   * this is 1 spaces left aligned
    * this is at same level as first line
     * this is 1 spaces right aligned
      * this is 2 spaces right aligned
       * this is 3 spaces right aligned
        * this is 4 spaces right aligned
         * this is 5 spaces right aligned
          * this is 6 spaces right aligned
           * this is 7 spaces right aligned
            * this is 8 spaces right aligned */
    class c2 {
    }
    /** this is comment with new lines in between

this is 4 spaces left aligned but above line is empty

 this is 3 spaces left aligned but above line is empty

  this is 2 spaces left aligned but above line is empty

    this is 1 spaces left aligned but above line is empty

    this is at same level as first line but above line is empty

     this is 1 spaces right aligned but above line is empty

      this is 2 spaces right aligned but above line is empty

       this is 3 spaces right aligned but above line is empty

        this is 4 spaces right aligned but above line is empty
    
    
    Above 2 lines are empty
    
    
    
    above 3 lines are empty*/
    class c3 {
    }
}
