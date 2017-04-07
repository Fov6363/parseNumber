#normal Util


#demo

```
parseIntDefault(1,0) => 1
parseIntDefault('1',0) => 1
parseIntDefault('abc',0) => 0
parseIntDefault([],0) => 0
```

```
parseIntForce(1) ==> 1
parseIntForce('1') ==> 1
parseIntForce('abc') ==> throw new Error(`parseIntForce num fail,num = ${num}`)
parseIntForce('abc','param error') ===> throw new Error('param error');
```

```
isJson({"a":1}) ==> true
isJson("{'aa':112}") ==> true
isJson(11) ==> false
isJson([]) ==> false
isJson("12") ==> false
```

```
isNumber("12") ==> true
isNumber(11) ==> true
isNumber("abc") ==> false
isNumber([]) ==> false
isNumber("") ==> false
```