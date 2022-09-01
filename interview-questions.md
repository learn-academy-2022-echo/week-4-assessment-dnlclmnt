# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is programming that is centered around the use of objects. Objects are data types that utilize key-value pairs. I have personally dealt with object-oriented programming several times while learning JavaScript, C#, and C++. The concept revolves around utilizing objects, rather than functional programming, to execute and make changes to more complicated code without affecting the rest of the code.

Researched answer: Object-oriented programming revolves around 4 central ideas: encapsulation, abstraction, inheritance, and polymorphism. These concepts allow code to be contained, but also reusable.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: An integer is any whole number. A float is any number with decimal points. If I needed to do any mathematical operation that required more precise numbers, I would choose to work with floats instead of integers. 5 would be an example of an integer and 5.4 would be an example of a float.

Researched answer: You can use the to_f method in ruby to convert a number value to a float. Also, the to_i method can be used to convert a value to an integer. These methods are especially useful when needing to convert values that are string data types into integers/floats. For instance - '5'.to_i will convert the string of 5 to an integer, which we can double check by using the class method as well.

3. Ruby has an implicit return. What does that mean?

Your answer: An implicit return essentially means that you can assume that the return is already there, thus not needing to explicitly write 'return'. You can see it in action in arrow functions with one line of code for example.

const myFunc = (word) => word.length

console.log(myFunc('hello'))

If we invoke the myFunc function and pass 'hello' as the argument, we can use the console log and see that 5 would be the output of our function. Implicit returns allow us to neatly and concisely write code. 

Researched answer: In Ruby, the last line of code in methods have an implicit return, thus eliminating the need to use the return keyword.

4. What is a block in Ruby?

Your answer: A block is the code between the do and end keywords of a method, defining what the method will do. If we have an array, we can use the each method on that array, defining what we wish to do on each value in that array with the 'do' and 'end' keywords.

array = [3, 6, 9]

array.each do |num|
    p num * 3 
end

In the above example, p num * 3 is the block that we are passing into the each method.


Researched answer: A block is an anonymous function that is passed to a method. Instead of using the do and end keywords to define where the block starts and ends, you can utilize curly brackets for single lines of code.

5. What is an instance variable in Ruby?

Your answer: Instance variables are variables belonging to each specific instance object of a class. 

class Animal
    attr_accessor(:name, :age)
    def initialize(animal_name, animal_age)
        @name = animal_name
        @age = animal_age
    end
end

dog = Animal.new('Doug', '3')
cat = Animal.new('Lenny', '8')

The dog and cat instance objects now have their own instance variables of name and age and are completely independent of each other.

Researched answer: Though the instantiated objects share the same class, their instance variables are completely unique from each other and can have different values. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostGreSQL is an open-source database management system that is utilized by many startups for backend applications. Postgres is the database engine. SQL is the language that allows us to interact with Postgres.

2. Ruby on Rails: Ruby on Rails is an open-source framework that allows us to quickly write full-stack web applications in Ruby. 

3. ORM: ORM (object-relational mapping) allows us to utilize SQL in Rails. It converts data between type systems using object-oriented programming.

4. Active Record: Rails object-relational mapping. It gives us an interface to interact with the data.

5. Migrations: A migration file is a file that you can generate that will allow you to make changes to a database. They utilize either snake case or camel case naming conventions. Each migration can be seen as a new 'version' of the database. 