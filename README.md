#for parse Number


#demo

```
parseIntDefault(1,0) => 1
parseIntDefault('1',0) => 1
parseIntDefault('abc',0) => 0
parseIntDefault([],0) => 0
```

```
parseIntForce(1); ==> 1
parseIntForce('1'); ==> 1
parseIntForce('abc'); ==> throw new Error()

```