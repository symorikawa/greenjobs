# Overview
Provides five functions that analyze the Green Jobs data in different ways

# Installation
Place the following code in your html file:

```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
<script src="greenjobs.js"></script>
```

#Usage
Below are some sample functions tested on the uhdata:
```<script>
     console.log("Total Degrees", listIndustries(greenjobs));
     console.log("Percentage Hawaiian", countyGreenJobs(greenjobs));
     console.log("Total Degrees By Year", jobswithKeyword(greenjobs));
   </script>
 ```

 For more information on the functions, refer to the javascript file

# Credit
Uses [Underscore](http://underscorejs.org/) Library
