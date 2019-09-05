# @unction/shuffle

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> OrderedEnumerableType<A> => OrderedEnumerableType<A>

Takes an Ordered Functor and returns an Ordered Functor with the same content, but in a random order.

``` javascript
users()
```

Would return:

``` javascript
[{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}, {"id": 3, "name": "Joshua Benitez"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 3, "name": "Joshua Benitez"}, {"id": 2, "name": "Angela Englund"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 3, "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 2, "name": "Angela Englund"}, {"id": 3, "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/shuffle.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/shuffle.svg?maxAge=2592000&style=flat-square
