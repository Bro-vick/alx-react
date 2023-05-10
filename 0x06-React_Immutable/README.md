# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Immutable objects. Who, what, when, where, and why?
How to use the Immutable.js library to bring immutability to Javascript
The differences between List and Map
How to use Merge, Concat, and Deep Merging
What a lazy Seq is

## Explanations

### Immutable Objects
An immutable object is an object whose state cannot be modified after it is created. This means that any attempt to change the object will result in a new object being created with the modified state, leaving the original object unchanged. Immutable objects are useful in scenarios where you need to ensure that data remains unchanged, such as in functional programming or in multi-threaded applications.

### Immutable.js Library
Immutable.js is a JavaScript library that provides a set of immutable data structures for use in JavaScript applications. It provides a way to create immutable data structures like Map, List, Set, and Record that are designed to be efficient, persistent, and easy to use.

To use Immutable.js, you first need to install it via a package manager like npm or Yarn. Once you've installed it, you can create an immutable object using the Immutable.fromJS() method, which takes a plain JavaScript object as input and returns an immutable version of that object. You can then manipulate the immutable object using various methods like set(), get(), update(), and merge(), which return new immutable objects with the desired changes.

### Differences between List and Map
List and Map are two of the most commonly used data structures in Immutable.js. A List is an ordered collection of values, similar to an array, while a Map is an unordered collection of key-value pairs, similar to a JavaScript object.
The main differences between a List and a Map are:

Lists are indexed by a numerical index, while Maps are indexed by keys.
Lists are ordered, while Maps are unordered.
Lists are ideal for scenarios where you need to access elements by their position in the list, while Maps are ideal for scenarios where you need to access elements by their key.
Merge, Concat, and Deep Merging
In Immutable.js, there are several methods for combining two or more immutable objects into a single object, including merge(), concat(), and mergeDeep().
merge() is used to merge two objects together, with values from the second object overwriting any values from the first object that have the same key.
concat() is used to concatenate two lists or sets together.
mergeDeep() is used to merge two objects together, recursively merging any nested objects or maps.
### Lazy Seq
A lazy Seq is a type of immutable sequence in Immutable.js that is designed to be evaluated lazily. This means that when you create a lazy Seq, the sequence is not evaluated immediately, but is instead evaluated only when it is accessed. This can be useful in scenarios where you have a large data set and only need to access a small subset of that data, as it can help improve performance by avoiding unnecessary computations. You can create a lazy Seq using the Immutable.Seq() method, and then use various methods like map(), filter(), and take() to manipulate the sequence.
