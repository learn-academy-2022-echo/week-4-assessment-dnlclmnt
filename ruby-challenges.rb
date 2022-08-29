# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# print statement using ternary operator
    # if number is odd (using odd method), then print out "number is odd" using string interpolation
        # else print out "number is even" using string interpolation

def even_or_odd num 
    p num.odd? ? "#{num} is odd" : "#{num} is even"
end



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method that takes a string as its argument
# call delete method on the string to check for 'AEIOUaeiou' and remove any of those letters

def no_vowels str
     str.delete 'AEIOUaeiou'
end



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create a function that takes in a string
# use downcase method on passed in string to ensure string will pass if there are any capitalized letters
# if the string is equal to the string in reverse, print "#{string} is a palindrome" using string interpolation
    # else print "#{string} is not a palindrome" using string interpolation

def is_palindrome str
    p str.downcase == str.downcase.reverse ? "#{str} is a palindrome" : "#{str} is not a palindrome"
end