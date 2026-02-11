// Practice Questions Database for LearnHub
console.log('practice_questions.js is loading...');

const practiceQuestions = {
    html: {
        title: "HTML",
        icon: "<i class='fab fa-html5'></i>",
        questions: [
            {
                number: 1,
                question: "What is HTML?",
                definition: "HTML stands for HyperText Markup Language",
                answer: `
                <div class="answer-content">
                    <h4>Definition:</h4>
                    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of web pages using markup.</p>
                    
                    <h4>Key Characteristics:</h4>
                    <ul>
                        <li><strong>Markup Language:</strong> Not a programming language</li>
                        <li><strong>Structure:</strong> Defines structure of web content</li>
                        <li><strong>Elements:</strong> Uses tags to define elements</li>
                        <li><strong>Platform Independent:</strong> Works on all devices</li>
                    </ul>
                    
                    <h4>Basic HTML Document Structure:</h4>
                    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </pre>
                </div>
                `
            },
            {
                number: 2,
                question: "What is the purpose of DOCTYPE declaration?",
                definition: "DOCTYPE declaration defines document type and version",
                answer: `
                <div class="answer-content">
                    <h4>Purpose of DOCTYPE:</h4>
                    <p>The &lt;!DOCTYPE&gt; declaration is an instruction to the web browser about what version of HTML the page is written in. It must be the very first thing in HTML document.</p>
                    
                    <h4>Key Functions:</h4>
                    <ul>
                        <li><strong>Browser Mode:</strong> Switches browser to standards mode</li>
                        <li><strong>Version Declaration:</strong> Specifies HTML version</li>
                        <li><strong>Validation:</strong> Helps validators understand document type</li>
                        <li><strong>Rendering:</strong> Ensures proper rendering of elements</li>
                    </ul>
                    
                    <h4>Common DOCTYPE Declarations:</h4>
                    <table class="comparison-table">
                        <tr>
                            <th>HTML Version</th>
                            <th>DOCTYPE Declaration</th>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td>&lt;!DOCTYPE html&gt;</td>
                        </tr>
                    </table>
                </div>
                `
            },
            {
                number: 3,
                question: "What are HTML Elements and Tags?",
                definition: "HTML elements are building blocks, tags define elements",
                answer: `
                <div class="answer-content">
                    <h4>HTML Tags:</h4>
                    <p>HTML tags are used to mark up the start and end of an HTML element. They are surrounded by angle brackets.</p>
                    
                    <h4>HTML Elements:</h4>
                    <p>An HTML element is everything from the start tag to the end tag, including content.</p>
                    
                    <h4>Basic Structure:</h4>
                    <pre>
&lt;tagname&gt;Content goes here...&lt;/tagname&gt;
                    </pre>
                </div>
                `
            },
            {
                number: 4,
                question: "What is the difference between block-level and inline elements?",
                definition: "Block elements take full width, inline elements take only necessary width",
                answer: `
                <div class="answer-content">
                    <h4>Block-level Elements:</h4>
                    <ul>
                        <li><strong>Width:</strong> Takes full available width</li>
                        <li><strong>Layout:</strong> Starts on a new line</li>
                        <li><strong>Examples:</strong> &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;ul&gt;</li>
                    </ul>
                    
                    <h4>Inline Elements:</h4>
                    <ul>
                        <li><strong>Width:</strong> Takes only necessary width</li>
                        <li><strong>Layout:</strong> Does not start new line</li>
                        <li><strong>Examples:</strong> &lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;</li>
                    </ul>
                </div>
                `
            },
            {
                number: 5,
                question: "What are HTML Attributes?",
                definition: "Attributes provide additional information about HTML elements",
                answer: `
                <div class="answer-content">
                    <h4>Definition:</h4>
                    <p>HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs.</p>
                    
                    <h4>Common Attributes:</h4>
                    <table class="comparison-table">
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>Unique identifier</td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td>Class for styling</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>Source for images/scripts</td>
                        </tr>
                    </table>
                </div>
                `
            },
            {
                number: 6,
                question: "What is Semantic HTML?",
                definition: "Semantic HTML uses meaningful tags that describe content",
                answer: `
                <div class="answer-content">
                    <h4>Definition:</h4>
                    <p>Semantic HTML refers to using HTML tags that clearly describe their meaning in a human- and machine-readable way.</p>
                    
                    <h4>Benefits:</h4>
                    <ul>
                        <li><strong>Accessibility:</strong> Screen readers understand content better</li>
                        <li><strong>SEO:</strong> Search engines understand content structure</li>
                        <li><strong>Maintainability:</strong> Code is easier to read</li>
                    </ul>
                </div>
                `
            },
            {
                number: 7,
                question: "What is the difference between &lt;div&gt; and &lt;span&gt;?",
                definition: "div is block-level, span is inline container",
                answer: `
                <div class="answer-content">
                    <h4>&lt;div&gt; Element:</h4>
                    <ul>
                        <li><strong>Type:</strong> Block-level container</li>
                        <li><strong>Display:</strong> Starts on new line</li>
                        <li><strong>Width:</strong> Takes full available width</li>
                    </ul>
                    
                    <h4>&lt;span&gt; Element:</h4>
                    <ul>
                        <li><strong>Type:</strong> Inline container</li>
                        <li><strong>Display:</strong> Does not start new line</li>
                        <li><strong>Width:</strong> Takes only necessary width</li>
                    </ul>
                </div>
                `
            },
            {
                number: 8,
                question: "What are HTML Forms and their elements?",
                definition: "HTML forms collect user input through various elements",
                answer: `
                <div class="answer-content">
                    <h4>HTML Form:</h4>
                    <p>HTML forms are used to collect user input. The form element is a container for different types of input elements.</p>
                    
                    <h4>Common Form Elements:</h4>
                    <ul>
                        <li>&lt;input&gt; - Various input types</li>
                        <li>&lt;textarea&gt; - Multi-line text</li>
                        <li>&lt;select&gt; - Dropdown list</li>
                        <li>&lt;button&gt; - Clickable button</li>
                        <li>&lt;label&gt; - Label for inputs</li>
                    </ul>
                </div>
                `
            },
            {
                number: 9,
                question: "What are HTML Headings and their hierarchy?",
                definition: "HTML headings define document structure with h1-h6 tags",
                answer: `
                <div class="answer-content">
                    <h4>Heading Elements:</h4>
                    <p>HTML provides six levels of headings from &lt;h1&gt; to &lt;h6&gt;. &lt;h1&gt; is the highest level.</p>
                    
                    <h4>Best Practices:</h4>
                    <ul>
                        <li>Use only one &lt;h1&gt; per page</li>
                        <li>Maintain proper hierarchy</li>
                        <li>Keep headings concise</li>
                        <li>Use for structure, not styling</li>
                    </ul>
                </div>
                `
            },
            {
                number: 10,
                question: "What is the difference between &lt;b&gt; and &lt;strong&gt; tags?",
                definition: "b is visual bold, strong is semantic importance",
                answer: `
                <div class="answer-content">
                    <h4>&lt;b&gt; Tag:</h4>
                    <ul>
                        <li><strong>Purpose:</strong> Visual styling only</li>
                        <li><strong>Semantic:</strong> No semantic meaning</li>
                    </ul>
                    
                    <h4>&lt;strong&gt; Tag:</h4>
                    <ul>
                        <li><strong>Purpose:</strong> Semantic importance</li>
                        <li><strong>Screen Readers:</strong> Read with emphasis</li>
                    </ul>
                </div>
                `
            }
        ]
    },
    css: {
        title: "CSS",
        icon: "<i class='fab fa-css3-alt'></i>",
        questions: [
            {
                number: 1,
                question: "What is CSS?",
                definition: "CSS stands for Cascading Style Sheets",
                answer: `<div class="answer-content"><h4>Definition:</h4><p>CSS (Cascading Style Sheets) is used to style HTML elements. It controls layout, colors, fonts, and spacing.</p><h4>Three Ways to Add CSS:</h4><ul><li>Inline: &lt;p style="color: red;"&gt;</li><li>Internal: &lt;style&gt; tag</li><li>External: &lt;link&gt; to .css file</li></ul></div>`
            },
            {
                number: 2,
                question: "What is the CSS Box Model?",
                definition: "Box model consists of margin, border, padding, and content",
                answer: `<div class="answer-content"><h4>Box Model Components:</h4><ul><li><strong>Content:</strong> Actual content</li><li><strong>Padding:</strong> Space inside border</li><li><strong>Border:</strong> Surrounds padding</li><li><strong>Margin:</strong> Space outside border</li></ul></div>`
            },
            {
                number: 3,
                question: "What is the difference between class and id selectors?",
                definition: "Class can be reused, id is unique",
                answer: `<div class="answer-content"><h4>Class Selector:</h4><ul><li>Can be used multiple times</li><li>Syntax: .className</li><li>Lower specificity</li></ul><h4>ID Selector:</h4><ul><li>Unique identifier</li><li>Syntax: #idName</li><li>Higher specificity</li></ul></div>`
            },
            {
                number: 4,
                question: "What is CSS Flexbox?",
                definition: "Flexible layout model for responsive design",
                answer: `<div class="answer-content"><h4>Flexbox:</h4><p>A layout model that provides efficient alignment and distribution of space among items in container.</p><h4>Properties:</h4><ul><li>display: flex</li><li>flex-direction</li><li>justify-content</li><li>align-items</li></ul></div>`
            },
            {
                number: 5,
                question: "What is CSS Grid?",
                definition: "Two-dimensional layout system",
                answer: `<div class="answer-content"><h4>Grid:</h4><p>Layout system that works with rows and columns. More powerful than flexbox for complex layouts.</p><h4>Key Properties:</h4><ul><li>display: grid</li><li>grid-template-columns</li><li>grid-template-rows</li></ul></div>`
            }
        ]
    },
    javascript: {
        title: "JavaScript",
        icon: "<i class='fab fa-js'></i>",
        questions: [
            {
                number: 1,
                question: "What is JavaScript?",
                definition: "JavaScript is a programming language for web browsers",
                answer: `<div class="answer-content"><h4>Definition:</h4><p>JavaScript is a lightweight, interpreted programming language that runs in web browsers to add interactivity to websites.</p><h4>Features:</h4><ul><li>Event-driven</li><li>Supports functional programming</li><li>Dynamically typed</li><li>DOM manipulation</li></ul></div>`
            },
            {
                number: 2,
                question: "What are JavaScript data types?",
                definition: "Primitive and complex data types",
                answer: `<div class="answer-content"><h4>Primitive Types:</h4><ul><li>String, Number, Boolean, Null, Undefined, Symbol</li></ul><h4>Complex Types:</h4><ul><li>Object, Array, Function</li></ul></div>`
            },
            {
                number: 3,
                question: "What is the difference between var, let, and const?",
                definition: "Variable declaration keywords with different scopes",
                answer: `<div class="answer-content"><h4>var:</h4><ul><li>Function scoped</li><li>Hoisted</li><li>Can be redeclared</li></ul><h4>let:</h4><ul><li>Block scoped</li><li>Not hoisted</li><li>Cannot be redeclared</li></ul><h4>const:</h4><ul><li>Block scoped</li><li>Cannot be reassigned</li></ul></div>`
            },
            {
                number: 4,
                question: "What are closures in JavaScript?",
                definition: "Function that has access to outer function's variables",
                answer: `<div class="answer-content"><h4>Closures:</h4><p>A closure is a function that has access to variables from another function's scope. They are created every time a function is created.</p></div>`
            },
            {
                number: 5,
                question: "What is the difference between == and ===?",
                definition: "Type coercion vs strict equality",
                answer: `<div class="answer-content"><h4>== (Loose Equality):</h4><ul><li>Performs type coercion</li><li>1 == '1' returns true</li></ul><h4>=== (Strict Equality):</h4><ul><li>No type coercion</li><li>1 === '1' returns false</li><li>More reliable</li></ul></div>`
            }
        ]
    },
    python: {
        title: "Python",
        icon: "<i class='fab fa-python'></i>",
        questions: [
            {
                number: 1,
                question: "What is Python?",
                definition: "Python is a high-level programming language",
                answer: `<div class="answer-content"><h4>Definition:</h4><p>Python is an interpreted, object-oriented programming language known for simplicity and readability.</p><h4>Features:</h4><ul><li>Simple syntax</li><li>Dynamic typing</li><li>Extensive libraries</li><li>Cross-platform</li></ul></div>`
            },
            {
                number: 2,
                question: "What are Python data types?",
                definition: "Built-in data types in Python",
                answer: `<div class="answer-content"><h4>Data Types:</h4><ul><li>int, float, string</li><li>list, tuple, dict</li><li>set, bool, None</li></ul></div>`
            },
            {
                number: 3,
                question: "What is a Python list?",
                definition: "Ordered, mutable collection of items",
                answer: `<div class="answer-content"><h4>List:</h4><p>Ordered collection that can be modified. Uses square brackets.</p><h4>Operations:</h4><ul><li>append(), remove(), pop()</li><li>Indexing and slicing</li><li>List comprehension</li></ul></div>`
            },
            {
                number: 4,
                question: "What is a dictionary in Python?",
                definition: "Unordered collection of key-value pairs",
                answer: `<div class="answer-content"><h4>Dictionary:</h4><p>Collection of key-value pairs enclosed in curly braces.</p><h4>Features:</h4><ul><li>Unordered (in older Python)</li><li>Mutable</li><li>Keys must be unique</li></ul></div>`
            },
            {
                number: 5,
                question: "What is a lambda function?",
                definition: "Anonymous function in Python",
                answer: `<div class="answer-content"><h4>Lambda:</h4><p>Anonymous function defined with lambda keyword. Single expression, automatically returns result.</p><h4>Syntax:</h4><pre>lambda arguments: expression</pre></div>`
            }
        ]
    },
    java: {
        title: "Java",
        icon: "<i class='fab fa-java'></i>",
        questions: [
            {
            number: 1,
            question: "What is Java?",
            definition: "Java is an object-oriented programming language",
            answer: `<div class="answer-content"><h4>Definition:</h4><p>Java is a general-purpose, class-based, object-oriented programming language known for 'write once, run anywhere' philosophy.</p><h4>Features:</h4><ul><li>Platform independent</li><li>Secure</li><li>Robust</li></ul></div>`
        },
        {
            number: 2,
            question: "What is JVM (Java Virtual Machine)?",
            definition: "Abstract computing machine that enables a computer",
            answer: `<div class="answer-content"><h4>JVM:</h4><p>Virtual machine that runs Java bytecode. Platform independent.</p><h4>Process:</h4><ul><li>Java code compiled to bytecode</li><li>JVM interprets bytecode</li><li>Works on any platform with JVM</li></ul></div>`
        },
        {
            number: 3,
            question: "What is the difference between class and object?",
            definition: "Class is blueprint, object is instance",
            answer: `<div class="answer-content"><h4>Class:</h4><ul><li>Logical entity</li><li>Blueprint for objects</li><li>Declared once</li></ul><h4>Object:</h4><ul><li>Physical entity</li><li>Instance of class</li><li>Multiple instances possible</li></ul></div>`
        },
        {
            number: 4,
            question: "What are access modifiers in Java?",
            definition: "Keywords that control access to members",
            answer: `<div class="answer-content"><h4>Access Levels:</h4><ul><li>public - anywhere</li><li>protected - package + subclasses</li><li>default - same package</li><li>private - same class only</li></ul></div>`
        },
        {
            number: 5,
            question: "What is inheritance in Java?",
            definition: "Mechanism of acquiring properties",
            answer: `<div class="answer-content"><h4>Inheritance:</h4><p>Process of acquiring all properties and behaviors of a parent class by a child class.</p><h4>Benefits:</h4><ul><li>Code reusability</li><li>Method overriding</li></ul></div>`
        },
        // ========== YAHAN SE NAYE JAVA QUESTIONS ADD KIYE ==========
        {
            number: 6,
            question: "What is polymorphism in Java? Explain compile-time and runtime polymorphism",
            definition: "Ability of an object to take many forms, with method overloading and overriding",
            answer: `<div class="answer-content">
                <h4>Polymorphism Definition:</h4>
                <p>Polymorphism means "many forms" - ability of an object to take on many forms. In Java, polymorphism allows methods to do different things based on the object it is acting upon.</p>
                
                <h4>1. Compile-time Polymorphism (Method Overloading):</h4>
                <p>Also known as static polymorphism. Achieved through method overloading.</p>
                <pre><code>class Calculator {
    // Method overloading - same name, different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
}</code></pre>
                
                <h4>2. Runtime Polymorphism (Method Overriding):</h4>
                <p>Also known as dynamic polymorphism. Achieved through method overriding and inheritance.</p>
                <pre><code>class Animal {
    public void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

// Runtime polymorphism example
Animal myAnimal;
myAnimal = new Dog();
myAnimal.sound(); // Output: Dog barks

myAnimal = new Cat();
myAnimal.sound(); // Output: Cat meows</code></pre>
                
                <h4>Key Differences:</h4>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Feature</th>
                        <th>Compile-time Polymorphism</th>
                        <th>Runtime Polymorphism</th>
                    </tr>
                    <tr>
                        <td><strong>Mechanism</strong></td>
                        <td>Method Overloading</td>
                        <td>Method Overriding</td>
                    </tr>
                    <tr>
                        <td><strong>Resolution</strong></td>
                        <td>At compile time</td>
                        <td>At runtime</td>
                    </tr>
                    <tr>
                        <td><strong>Inheritance</strong></td>
                        <td>Not required</td>
                        <td>Required</td>
                    </tr>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>Better (early binding)</td>
                        <td>Slower (late binding)</td>
                    </tr>
                    <tr>
                        <td><strong>Flexibility</strong></td>
                        <td>Less flexible</td>
                        <td>More flexible</td>
                    </tr>
                </table>
                
                <h4>Real-world Example:</h4>
                <pre><code>// Payment processing system example
interface Payment {
    void processPayment(double amount);
}

class CreditCardPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
    }
}

class PayPalPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
    }
}

class UpiPayment implements Payment {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing UPI payment: $" + amount);
    }
}

// Polymorphic behavior
public class PaymentProcessor {
    public void executePayment(Payment payment, double amount) {
        payment.processPayment(amount); // Calls appropriate implementation
    }
    
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();
        
        Payment ccPayment = new CreditCardPayment();
        Payment ppPayment = new PayPalPayment();
        Payment upiPayment = new UpiPayment();
        
        processor.executePayment(ccPayment, 100.0);
        processor.executePayment(ppPayment, 200.0);
        processor.executePayment(upiPayment, 300.0);
    }
}</code></pre>
            </div>`
        },
        {
            number: 7,
            question: "What is abstraction in Java? Explain abstract classes and interfaces with differences",
            definition: "Hiding implementation details and showing only functionality through abstract classes and interfaces",
            answer: `<div class="answer-content">
                <h4>Abstraction Definition:</h4>
                <p>Abstraction is the process of hiding implementation details and showing only essential features of an object. In Java, abstraction is achieved using abstract classes and interfaces.</p>
                
                <h4>1. Abstract Classes:</h4>
                <p>A class declared with <code>abstract</code> keyword that may contain abstract methods (methods without body).</p>
                <pre><code>// Abstract class example
abstract class Vehicle {
    // Abstract method (no implementation)
    public abstract void start();
    
    // Concrete method (has implementation)
    public void stop() {
        System.out.println("Vehicle stopped");
    }
    
    // Abstract class can have constructor
    public Vehicle() {
        System.out.println("Vehicle constructor");
    }
    
    // Can have instance variables
    protected String brand;
    protected int year;
}

class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car starts with key");
    }
}

class Bike extends Vehicle {
    @Override
    public void start() {
        System.out.println("Bike starts with kick");
    }
}</code></pre>
                
                <h4>2. Interfaces:</h4>
                <p>An interface is a completely abstract class that contains only abstract methods (until Java 7). From Java 8, interfaces can have default and static methods.</p>
                <pre><code>// Interface example
interface Animal {
    // Abstract method (implicitly public abstract)
    void eat();
    void sleep();
    
    // Default method (Java 8+)
    default void breathe() {
        System.out.println("Animal is breathing");
    }
    
    // Static method (Java 8+)
    static void showCategory() {
        System.out.println("This is Animal interface");
    }
    
    // Constant (implicitly public static final)
    String CATEGORY = "LIVING_BEING";
}

// Implementing interface
class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog eats meat");
    }
    
    @Override
    public void sleep() {
        System.out.println("Dog sleeps 12 hours");
    }
}

// Multiple interfaces implementation
interface Swimmable {
    void swim();
}

interface Flyable {
    void fly();
}

class Duck implements Animal, Swimmable, Flyable {
    @Override
    public void eat() {
        System.out.println("Duck eats grains");
    }
    
    @Override
    public void sleep() {
        System.out.println("Duck sleeps standing");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck can swim");
    }
    
    @Override
    public void fly() {
        System.out.println("Duck can fly");
    }
}</code></pre>
                
                <h4>Abstract Class vs Interface:</h4>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Parameter</th>
                        <th>Abstract Class</th>
                        <th>Interface</th>
                    </tr>
                    <tr>
                        <td><strong>Keyword</strong></td>
                        <td><code>abstract class</code></td>
                        <td><code>interface</code></td>
                    </tr>
                    <tr>
                        <td><strong>Inheritance</strong></td>
                        <td>Extends (single inheritance)</td>
                        <td>Implements (multiple inheritance)</td>
                    </tr>
                    <tr>
                        <td><strong>Methods</strong></td>
                        <td>Can have abstract + concrete methods</td>
                        <td>Only abstract until Java 7, default/static from Java 8</td>
                    </tr>
                    <tr>
                        <td><strong>Variables</strong></td>
                        <td>Can have any variables</td>
                        <td>Only public static final (constants)</td>
                    </tr>
                    <tr>
                        <td><strong>Constructor</strong></td>
                        <td>Can have constructor</td>
                        <td>No constructor</td>
                    </tr>
                    <tr>
                        <td><strong>Access Modifiers</strong></td>
                        <td>Can have any access modifiers</td>
                        <td>Implicitly public</td>
                    </tr>
                    <tr>
                        <td><strong>When to use</strong></td>
                        <td>When sharing code among related classes</td>
                        <td>When unrelated classes implement common behavior</td>
                    </tr>
                </table>
                
                <h4>Java 8+ Interface Features:</h4>
                <pre><code>interface ModernInterface {
    // Traditional abstract method
    void traditionalMethod();
    
    // Default method (Java 8) - can be overridden
    default void defaultMethod() {
        System.out.println("Default implementation");
        privateMethod(); // Can call private method
    }
    
    // Static method (Java 8) - belongs to interface
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
    
    // Private method (Java 9) - helper method
    private void privateMethod() {
        System.out.println("Private helper method");
    }
    
    // Private static method (Java 9)
    private static void privateStaticMethod() {
        System.out.println("Private static method");
    }
}</code></pre>
                
                <h4>Real-world Design Example:</h4>
                <pre><code>// Database abstraction layer
interface Database {
    void connect();
    void disconnect();
    void executeQuery(String query);
    default void log(String message) {
        System.out.println("Database Log: " + message);
    }
}

abstract class BaseDatabase implements Database {
    protected String connectionString;
    protected boolean isConnected = false;
    
    public BaseDatabase(String connectionString) {
        this.connectionString = connectionString;
    }
    
    @Override
    public void disconnect() {
        if (isConnected) {
            System.out.println("Disconnecting from database");
            isConnected = false;
        }
    }
    
    public abstract String getDatabaseType();
}

class MySQLDatabase extends BaseDatabase {
    public MySQLDatabase(String host, String database) {
        super("jdbc:mysql://" + host + "/" + database);
    }
    
    @Override
    public void connect() {
        System.out.println("Connecting to MySQL: " + connectionString);
        isConnected = true;
        log("MySQL connection established");
    }
    
    @Override
    public void executeQuery(String query) {
        if (!isConnected) {
            throw new IllegalStateException("Not connected to database");
        }
        System.out.println("Executing MySQL query: " + query);
    }
    
    @Override
    public String getDatabaseType() {
        return "MySQL";
    }
}

class OracleDatabase extends BaseDatabase {
    public OracleDatabase(String host, String sid) {
        super("jdbc:oracle:thin:@" + host + ":1521:" + sid);
    }
    
    @Override
    public void connect() {
        System.out.println("Connecting to Oracle: " + connectionString);
        isConnected = true;
        log("Oracle connection established");
    }
    
    @Override
    public void executeQuery(String query) {
        if (!isConnected) {
            throw new IllegalStateException("Not connected to database");
        }
        System.out.println("Executing Oracle query: " + query);
    }
    
    @Override
    public String getDatabaseType() {
        return "Oracle";
    }
}

// Usage
public class DatabaseDemo {
    public static void main(String[] args) {
        Database mysql = new MySQLDatabase("localhost", "mydb");
        Database oracle = new OracleDatabase("server1", "ORCL");
        
        mysql.connect();
        mysql.executeQuery("SELECT * FROM users");
        mysql.disconnect();
        
        oracle.connect();
        oracle.executeQuery("SELECT * FROM employees");
        oracle.disconnect();
    }
}</code></pre>
            </div>`
        },
        {
            number: 8,
            question: "What is encapsulation in Java? Explain with getters, setters, and real-world examples",
            definition: "Wrapping data and methods together as a single unit and restricting direct access to data",
            answer: `<div class="answer-content">
                <h4>Encapsulation Definition:</h4>
                <p>Encapsulation is the mechanism of wrapping data (variables) and code (methods) together as a single unit. In encapsulation, the variables of a class are hidden from other classes and can be accessed only through the methods of their current class.</p>
                
                <h4>Key Principles:</h4>
                <ul>
                    <li><strong>Data Hiding:</strong> Making variables private</li>
                    <li><strong>Abstraction:</strong> Providing public methods to access data</li>
                    <li><strong>Controlled Access:</strong> Through getters and setters</li>
                </ul>
                
                <h4>Basic Example:</h4>
                <pre><code>public class BankAccount {
    // Private variables (data hiding)
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder, double initialBalance, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.pin = pin;
    }
    
    // Getter methods (read access)
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // No getter for PIN (security)
    
    // Setter methods with validation (write access)
    public void setAccountHolder(String accountHolder) {
        if (accountHolder != null && !accountHolder.trim().isEmpty()) {
            this.accountHolder = accountHolder;
        } else {
            throw new IllegalArgumentException("Invalid account holder name");
        }
    }
    
    // Business methods (controlled access)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
    }
    
    public void withdraw(double amount, String enteredPin) {
        if (!pin.equals(enteredPin)) {
            throw new SecurityException("Invalid PIN");
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else if (amount > balance) {
            throw new IllegalArgumentException("Insufficient funds");
        } else {
            throw new IllegalArgumentException("Invalid withdrawal amount");
        }
    }
    
    public boolean validatePin(String enteredPin) {
        return pin.equals(enteredPin);
    }
    
    // No setter for balance - can only be modified through deposit/withdraw
}</code></pre>
                
                <h4>Advantages of Encapsulation:</h4>
                <ol>
                    <li><strong>Data Hiding:</strong> User cannot directly access internal data</li>
                    <li><strong>Flexibility:</strong> Can change internal implementation without affecting users</li>
                    <li><strong>Reusability:</strong> Encapsulated code can be reused</li>
                    <li><strong>Testing:</strong> Easier to unit test</li>
                    <li><strong>Maintenance:</strong> Easier to maintain and modify</li>
                </ol>
                
                <h4>Real-world Example: E-commerce Product System</h4>
                <pre><code>public class Product {
    private String id;
    private String name;
    private String description;
    private double price;
    private int stockQuantity;
    private double discountPercentage;
    private boolean isActive;
    private Date createdDate;
    
    // Constructor
    public Product(String id, String name, double price, int stockQuantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.isActive = true;
        this.createdDate = new Date();
        this.discountPercentage = 0.0;
    }
    
    // Getters
    public String getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    
    public double getPrice() {
        return calculateDiscountedPrice();
    }
    
    public int getStockQuantity() { return stockQuantity; }
    public boolean isActive() { return isActive; }
    
    // Setters with validation
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Product name cannot be empty");
        }
        if (name.length() > 100) {
            throw new IllegalArgumentException("Product name too long");
        }
        this.name = name;
    }
    
    public void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        this.price = price;
    }
    
    public void setDiscountPercentage(double discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new IllegalArgumentException("Discount must be between 0-100%");
        }
        this.discountPercentage = discountPercentage;
    }
    
    // Business methods
    private double calculateDiscountedPrice() {
        return price - (price * discountPercentage / 100);
    }
    
    public void updateStock(int quantity) {
        if (this.stockQuantity + quantity < 0) {
            throw new IllegalArgumentException("Insufficient stock");
        }
        this.stockQuantity += quantity;
    }
    
    public boolean isAvailable() {
        return isActive && stockQuantity > 0;
    }
    
    public void applyPromotion(double discount, Date expiryDate) {
        if (discount < 0 || discount > 70) {
            throw new IllegalArgumentException("Invalid discount amount");
        }
        this.discountPercentage = discount;
        // Schedule discount removal
        scheduleDiscountRemoval(expiryDate);
    }
    
    private void scheduleDiscountRemoval(Date expiryDate) {
        // Implementation for scheduling
        System.out.println("Discount scheduled to expire on: " + expiryDate);
    }
    
    public Product cloneForNewSeason() {
        Product newProduct = new Product(
            generateNewId(),
            this.name + " (New Season)",
            this.price,
            0
        );
        newProduct.description = this.description;
        return newProduct;
    }
    
    private String generateNewId() {
        return "PROD_" + System.currentTimeMillis();
    }
    
    @Override
    public String toString() {
        return String.format("Product[id=%s, name=%s, price=$%.2f, stock=%d, active=%s]",
            id, name, getPrice(), stockQuantity, isActive);
    }
}

// Shopping Cart using encapsulated Product
public class ShoppingCart {
    private Map<Product, Integer> items;
    private String cartId;
    private Date createdDate;
    
    public ShoppingCart() {
        this.items = new HashMap<>();
        this.cartId = "CART_" + UUID.randomUUID().toString();
        this.createdDate = new Date();
    }
    
    public void addItem(Product product, int quantity) {
        if (!product.isAvailable()) {
            throw new IllegalStateException("Product not available");
        }
        
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be positive");
        }
        
        int currentQuantity = items.getOrDefault(product, 0);
        if (currentQuantity + quantity > 10) { // Max 10 per product
            throw new IllegalArgumentException("Maximum quantity exceeded");
        }
        
        items.put(product, currentQuantity + quantity);
    }
    
    public void removeItem(Product product, int quantity) {
        if (!items.containsKey(product)) {
            throw new IllegalArgumentException("Product not in cart");
        }
        
        int currentQuantity = items.get(product);
        if (currentQuantity <= quantity) {
            items.remove(product);
        } else {
            items.put(product, currentQuantity - quantity);
        }
    }
    
    public double calculateTotal() {
        double total = 0;
        for (Map.Entry<Product, Integer> entry : items.entrySet()) {
            Product product = entry.getKey();
            int quantity = entry.getValue();
            total += product.getPrice() * quantity;
        }
        return total;
    }
    
    public void applyDiscountCode(String code) {
        // Validate and apply discount
        System.out.println("Applying discount code: " + code);
    }
    
    public Order checkout(String paymentMethod) {
        if (items.isEmpty()) {
            throw new IllegalStateException("Cart is empty");
        }
        
        double total = calculateTotal();
        Order order = new Order(generateOrderId(), items, total, paymentMethod);
        clearCart();
        return order;
    }
    
    private String generateOrderId() {
        return "ORD_" + System.currentTimeMillis();
    }
    
    private void clearCart() {
        items.clear();
    }
    
    public String getCartSummary() {
        StringBuilder summary = new StringBuilder();
        summary.append("Cart ID: ").append(cartId).append("\\n");
        summary.append("Items: ").append(items.size()).append("\\n");
        summary.append("Total: $").append(String.format("%.2f", calculateTotal())).append("\\n");
        return summary.toString();
    }
}

// Order class
class Order {
    private String orderId;
    private Map<Product, Integer> items;
    private double totalAmount;
    private String paymentMethod;
    private Date orderDate;
    private OrderStatus status;
    
    public Order(String orderId, Map<Product, Integer> items, double totalAmount, String paymentMethod) {
        this.orderId = orderId;
        this.items = new HashMap<>(items);
        this.totalAmount = totalAmount;
        this.paymentMethod = paymentMethod;
        this.orderDate = new Date();
        this.status = OrderStatus.PENDING;
    }
    
    // Getters and setters...
    enum OrderStatus {
        PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
    }
}

// Usage Example
public class ECommerceDemo {
    public static void main(String[] args) {
        // Create products
        Product laptop = new Product("P001", "Gaming Laptop", 1200.00, 50);
        laptop.setDiscountPercentage(10.0);
        
        Product phone = new Product("P002", "Smartphone", 800.00, 100);
        
        // Create shopping cart
        ShoppingCart cart = new ShoppingCart();
        
        // Add items to cart
        cart.addItem(laptop, 1);
        cart.addItem(phone, 2);
        
        // Display cart summary
        System.out.println(cart.getCartSummary());
        
        // Checkout
        try {
            Order order = cart.checkout("CREDIT_CARD");
            System.out.println("Order placed successfully: " + order);
        } catch (Exception e) {
            System.out.println("Checkout failed: " + e.getMessage());
        }
    }
}</code></pre>
                
                <h4>Best Practices for Encapsulation:</h4>
                <ol>
                    <li>Make all instance variables private</li>
                    <li>Provide public getter and setter methods</li>
                    <li>Add validation logic in setters</li>
                    <li>Use business methods instead of direct variable access</li>
                    <li>Consider immutable objects where appropriate</li>
                    <li>Use defensive copying for mutable objects</li>
                    <li>Document the invariants of your class</li>
                </ol>
                
                <h4>Immutable Class Example (Advanced Encapsulation):</h4>
                <pre><code>// Immutable class - complete encapsulation
public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final List<String> addresses;
    private final Date birthDate;
    
    public ImmutablePerson(String name, int age, List<String> addresses, Date birthDate) {
        this.name = name;
        this.age = age;
        // Defensive copy for mutable objects
        this.addresses = new ArrayList<>(addresses);
        this.birthDate = new Date(birthDate.getTime());
    }
    
    // Getters return defensive copies
    public String getName() { return name; }
    public int getAge() { return age; }
    public List<String> getAddresses() {
        return new ArrayList<>(addresses); // Return copy
    }
    public Date getBirthDate() {
        return new Date(birthDate.getTime()); // Return copy
    }
    
    // No setters - immutable
    
    // Builder pattern for complex construction
    public static class Builder {
        private String name;
        private int age;
        private List<String> addresses = new ArrayList<>();
        private Date birthDate;
        
        public Builder setName(String name) {
            this.name = name;
            return this;
        }
        
        public Builder setAge(int age) {
            this.age = age;
            return this;
        }
        
        public Builder addAddress(String address) {
            this.addresses.add(address);
            return this;
        }
        
        public Builder setBirthDate(Date birthDate) {
            this.birthDate = new Date(birthDate.getTime());
            return this;
        }
        
        public ImmutablePerson build() {
            return new ImmutablePerson(name, age, addresses, birthDate);
        }
    }
}</code></pre>
            </div>`
        },
        {
            number: 9,
            question: "Explain exception handling in Java with try-catch-finally, throw, throws, and custom exceptions",
            definition: "Mechanism to handle runtime errors using try-catch blocks, throw keyword, and custom exception classes",
            answer: `<div class="answer-content">
                <h4>Exception Handling Overview:</h4>
                <p>Exception handling is a mechanism to handle runtime errors so that normal flow of the application can be maintained. Java provides five keywords for exception handling: <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code>.</p>
                
                <h4>Exception Hierarchy:</h4>
                <pre><code>Throwable (Root class)
    ├── Error (Serious problems, not meant to be caught)
    │    ├── VirtualMachineError
    │    ├── OutOfMemoryError
    │    └── StackOverflowError
    │
    └── Exception (Problems that can be caught)
         ├── RuntimeException (Unchecked Exceptions)
         │    ├── NullPointerException
         │    ├── ArrayIndexOutOfBoundsException
         │    ├── ArithmeticException
         │    └── IllegalArgumentException
         │
         └── IOException (Checked Exceptions)
              ├── FileNotFoundException
              ├── EOFException
              └── SQLException</code></pre>
                
                <h4>1. Basic Try-Catch-Finally:</h4>
                <pre><code>public class BasicExceptionHandling {
    public static void main(String[] args) {
        try {
            // Code that may throw exception
            int result = divide(10, 0);
            System.out.println("Result: " + result);
            
        } catch (ArithmeticException e) {
            // Handle specific exception
            System.out.println("Cannot divide by zero: " + e.getMessage());
            
        } catch (Exception e) {
            // Handle general exception (should be last)
            System.out.println("General exception: " + e.getMessage());
            
        } finally {
            // Always executes (cleanup code)
            System.out.println("Finally block executed");
        }
        
        System.out.println("Program continues...");
    }
    
    public static int divide(int a, int b) {
        return a / b; // May throw ArithmeticException
    }
}</code></pre>
                
                <h4>2. Multiple Catch Blocks and Multi-catch:</h4>
                <pre><code>public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            String str = null;
            System.out.println(str.length()); // NullPointerException
            
            int[] arr = new int[5];
            arr[10] = 50; // ArrayIndexOutOfBoundsException
            
        } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
            // Multi-catch (Java 7+)
            System.out.println("Multiple exception caught: " + e.getClass().getName());
            
        } catch (Exception e) {
            System.out.println("General exception: " + e.getMessage());
        }
    }
}</code></pre>
                
                <h4>3. Try-with-Resources (Java 7+):</h4>
                <pre><code>import java.io.*;
import java.util.Scanner;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        // Automatic resource management
        try (FileInputStream fis = new FileInputStream("file.txt");
             Scanner scanner = new Scanner(fis)) {
            
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        }
        // Resources automatically closed
    }
    
    // Custom resource implementing AutoCloseable
    static class DatabaseConnection implements AutoCloseable {
        private String connectionId;
        
        public DatabaseConnection(String id) {
            this.connectionId = id;
            System.out.println("Connection opened: " + id);
        }
        
        public void executeQuery(String query) {
            System.out.println("Executing: " + query);
        }
        
        @Override
        public void close() {
            System.out.println("Connection closed: " + connectionId);
        }
    }
    
    public static void useCustomResource() {
        try (DatabaseConnection conn = new DatabaseConnection("DB1")) {
            conn.executeQuery("SELECT * FROM users");
        } // conn.close() automatically called
    }
}</code></pre>
                
                <h4>4. Throw Keyword (Throwing Exceptions):</h4>
                <pre><code>public class ThrowExample {
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Age validation failed: " + e.getMessage());
        }
    }
    
    public static void validateAge(int age) {
        if (age < 18) {
            // Throw exception with custom message
            throw new IllegalArgumentException("Age must be 18 or older. Provided: " + age);
        }
        System.out.println("Age validated successfully");
    }
    
    // Re-throwing exceptions
    public static void processFile(String filename) throws IOException {
        try {
            FileReader reader = new FileReader(filename);
            // File processing
        } catch (FileNotFoundException e) {
            // Log and re-throw
            System.err.println("File not found: " + filename);
            throw e; // Re-throw same exception
        } catch (IOException e) {
            // Wrap and throw new exception
            throw new IOException("Error processing file: " + filename, e);
        }
    }
}</code></pre>
                
                <h4>5. Throws Keyword (Declaring Exceptions):</h4>
                <pre><code>import java.io.*;

public class ThrowsExample {
    // Declaring checked exceptions
    public static void readFile(String filename) throws FileNotFoundException, IOException {
        FileReader reader = new FileReader(filename);
        // Read file contents
        reader.close();
    }
    
    public static void processData() throws Exception {
        // Can throw multiple exceptions
        readFile("data.txt");
        // Other operations that may throw exceptions
    }
    
    public static void main(String[] args) {
        try {
            processData();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("IO Error");
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        }
    }
}</code></pre>
                
                <h4>6. Custom Exceptions:</h4>
                <pre><code>// Custom checked exception
class InsufficientFundsException extends Exception {
    private double currentBalance;
    private double withdrawalAmount;
    
    public InsufficientFundsException(double currentBalance, double withdrawalAmount) {
        super(String.format("Insufficient funds. Balance: $%.2f, Attempted: $%.2f", 
              currentBalance, withdrawalAmount));
        this.currentBalance = currentBalance;
        this.withdrawalAmount = withdrawalAmount;
    }
    
    public double getCurrentBalance() {
        return currentBalance;
    }
    
    public double getWithdrawalAmount() {
        return withdrawalAmount;
    }
    
    public double getShortage() {
        return withdrawalAmount - currentBalance;
    }
}

// Custom unchecked exception
class InvalidTransactionException extends RuntimeException {
    private String transactionId;
    private String reason;
    
    public InvalidTransactionException(String transactionId, String reason) {
        super(String.format("Transaction %s invalid: %s", transactionId, reason));
        this.transactionId = transactionId;
        this.reason = reason;
    }
    
    public String getTransactionId() {
        return transactionId;
    }
    
    public String getReason() {
        return reason;
    }
}

// Custom exception with error codes
class BusinessException extends Exception {
    private final String errorCode;
    private final String errorMessage;
    private final Severity severity;
    
    enum Severity {
        LOW, MEDIUM, HIGH, CRITICAL
    }
    
    public BusinessException(String errorCode, String errorMessage, Severity severity) {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.severity = severity;
    }
    
    public BusinessException(String errorCode, String errorMessage, Severity severity, Throwable cause) {
        super(errorMessage, cause);
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.severity = severity;
    }
    
    // Getters
    public String getErrorCode() { return errorCode; }
    public Severity getSeverity() { return severity; }
    
    @Override
    public String toString() {
        return String.format("[%s] %s (Severity: %s)", errorCode, errorMessage, severity);
    }
}

// Using custom exceptions
public class BankAccount {
    private double balance;
    private String accountNumber;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount <= 0) {
            throw new InvalidTransactionException(accountNumber, "Invalid withdrawal amount");
        }
        
        if (amount > balance) {
            throw new InsufficientFundsException(balance, amount);
        }
        
        balance -= amount;
        System.out.println("Withdrawn: $" + amount + ", New Balance: $" + balance);
    }
    
    public void transfer(BankAccount recipient, double amount) 
            throws InsufficientFundsException, BusinessException {
        
        if (recipient == null) {
            throw new BusinessException("TRF001", "Recipient account is null", 
                  BusinessException.Severity.HIGH);
        }
        
        if (amount <= 0) {
            throw new BusinessException("TRF002", "Transfer amount must be positive", 
                  BusinessException.Severity.MEDIUM);
        }
        
        try {
            withdraw(amount);
            recipient.deposit(amount);
            
        } catch (InsufficientFundsException e) {
            throw new BusinessException("TRF003", "Transfer failed due to insufficient funds", 
                  BusinessException.Severity.HIGH, e);
        }
    }
    
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new InvalidTransactionException(accountNumber, "Invalid deposit amount");
        }
        balance += amount;
    }
}</code></pre>
                
                <h4>7. Exception Handling Best Practices:</h4>
                <pre><code>public class ExceptionBestPractices {
    
    // 1. Catch specific exceptions first
    public void readConfiguration() {
        try {
            // File operations
        } catch (FileNotFoundException e) {
            // Handle file not found
        } catch (IOException e) {
            // Handle other IO errors
        } catch (Exception e) {
            // Last resort
        }
    }
    
    // 2. Don't swallow exceptions
    public void badPractice() {
        try {
            // Some operation
        } catch (Exception e) {
            // BAD: Empty catch block
        }
    }
    
    public void goodPractice() {
        try {
            // Some operation
        } catch (Exception e) {
            // GOOD: Log and handle
            logError(e);
            throw new RuntimeException("Operation failed", e);
        }
    }
    
    // 3. Use finally for cleanup
    public void processResource() {
        Connection conn = null;
        try {
            conn = getConnection();
            // Use connection
        } catch (SQLException e) {
            handleSQLException(e);
        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    logError(e);
                }
            }
        }
    }
    
    // 4. Throw early, catch late
    public void validateAndProcess(String input) {
        // Validate early
        if (input == null || input.trim().isEmpty()) {
            throw new IllegalArgumentException("Input cannot be null or empty");
        }
        
        // Process
        // ...
    }
    
    // 5. Use descriptive exception messages
    public void updateUser(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User object cannot be null");
        }
        
        if (user.getId() <= 0) {
            throw new IllegalArgumentException("User ID must be positive. Provided: " + user.getId());
        }
    }
    
    // 6. Create exception chains
    public void processOrder(Order order) {
        try {
            validateOrder(order);
            processPayment(order);
            shipOrder(order);
            
        } catch (ValidationException e) {
            throw new OrderProcessingException("Order validation failed", e);
        } catch (PaymentException e) {
            throw new OrderProcessingException("Payment processing failed", e);
        } catch (ShippingException e) {
            throw new OrderProcessingException("Shipping failed", e);
        }
    }
    
    // 7. Use try-with-resources for AutoCloseable objects
    public void copyFile(String source, String destination) throws IOException {
        try (InputStream in = new FileInputStream(source);
             OutputStream out = new FileOutputStream(destination)) {
            
            byte[] buffer = new byte[1024];
            int length;
            while ((length = in.read(buffer)) > 0) {
                out.write(buffer, 0, length);
            }
        }
    }
    
    // 8. Create custom exceptions for business logic
    public void placeOrder(Order order) throws OrderException {
        try {
            if (!inventoryService.hasStock(order.getItems())) {
                throw new OutOfStockException("Some items are out of stock", order.getItems());
            }
            
            if (!paymentService.processPayment(order)) {
                throw new PaymentFailedException("Payment failed for order: " + order.getId());
            }
            
        } catch (OutOfStockException | PaymentFailedException e) {
            // Business exceptions - recoverable
            notifyCustomer(e);
            throw e;
        } catch (Exception e) {
            // Technical exceptions
            logTechnicalError(e);
            throw new OrderException("Technical error processing order", e);
        }
    }
    
    // Helper methods
    private void logError(Exception e) {
        System.err.println("Error: " + e.getMessage());
        e.printStackTrace();
    }
    
    private Connection getConnection() throws SQLException {
        // Return database connection
        return null;
    }
    
    private void handleSQLException(SQLException e) {
        // Handle SQL exception
    }
    
    private void notifyCustomer(Exception e) {
        // Notify customer
    }
    
    private void logTechnicalError(Exception e) {
        // Log technical error
    }
}

// Custom business exceptions
class OrderException extends Exception {
    public OrderException(String message) { super(message); }
    public OrderException(String message, Throwable cause) { super(message, cause); }
}

class OutOfStockException extends OrderException {
    private List<String> outOfStockItems;
    
    public OutOfStockException(String message, List<String> items) {
        super(message);
        this.outOfStockItems = items;
    }
    
    public List<String> getOutOfStockItems() {
        return outOfStockItems;
    }
}

class PaymentFailedException extends OrderException {
    public PaymentFailedException(String message) { super(message); }
}

// Usage example
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        ExceptionBestPractices practices = new ExceptionBestPractices();
        
        try {
            practices.placeOrder(new Order());
            
        } catch (OutOfStockException e) {
            System.out.println("Order failed - out of stock: " + e.getOutOfStockItems());
            // Allow customer to modify order
            
        } catch (PaymentFailedException e) {
            System.out.println("Order failed - payment issue: " + e.getMessage());
            // Retry payment or show alternative methods
            
        } catch (OrderException e) {
            System.out.println("Order failed: " + e.getMessage());
            // General order failure handling
            
        } finally {
            System.out.println("Order processing completed");
        }
    }
}</code></pre>
                
                <h4>8. Common Exception Handling Patterns:</h4>
                <pre><code>// Pattern 1: Retry Pattern
public class RetryPattern {
    public static <T> T retryOperation(Callable<T> operation, int maxRetries, long delayMs) 
            throws Exception {
        
        int attempt = 0;
        while (attempt < maxRetries) {
            try {
                return operation.call();
            } catch (Exception e) {
                attempt++;
                if (attempt >= maxRetries) {
                    throw new Exception("Operation failed after " + maxRetries + " attempts", e);
                }
                System.out.println("Attempt " + attempt + " failed, retrying...");
                Thread.sleep(delayMs);
            }
        }
        throw new Exception("Max retries reached");
    }
}

// Pattern 2: Circuit Breaker Pattern
public class CircuitBreaker {
    private enum State { CLOSED, OPEN, HALF_OPEN }
    
    private State state = State.CLOSED;
    private int failureCount = 0;
    private final int failureThreshold;
    private final long timeoutMs;
    private long lastFailureTime;
    
    public CircuitBreaker(int failureThreshold, long timeoutMs) {
        this.failureThreshold = failureThreshold;
        this.timeoutMs = timeoutMs;
    }
    
    public <T> T execute(Callable<T> callable) throws Exception {
        if (state == State.OPEN) {
            if (System.currentTimeMillis() - lastFailureTime > timeoutMs) {
                state = State.HALF_OPEN;
            } else {
                throw new Exception("Circuit breaker is OPEN");
            }
        }
        
        try {
            T result = callable.call();
            if (state == State.HALF_OPEN) {
                state = State.CLOSED;
                failureCount = 0;
            }
            return result;
        } catch (Exception e) {
            recordFailure();
            throw e;
        }
    }
    
    private void recordFailure() {
        failureCount++;
        lastFailureTime = System.currentTimeMillis();
        
        if (failureCount >= failureThreshold) {
            state = State.OPEN;
        }
    }
}

// Pattern 3: Fallback Pattern
public class FallbackPattern {
    public String getDataFromPrimarySource() {
        try {
            // Try primary source
            return fetchFromPrimary();
        } catch (Exception e) {
            // Fallback to secondary source
            return getDataFromSecondarySource();
        }
    }
    
    private String fetchFromPrimary() throws Exception {
        // Primary source logic
        throw new Exception("Primary source unavailable");
    }
    
    private String getDataFromSecondarySource() {
        // Secondary source logic
        return "Data from secondary source";
    }
}</code></pre>
            </div>`
        },
        {
            number: 10,
            question: "What are collections in Java? Explain List, Set, Map interfaces and their implementations with examples",
            definition: "Framework that provides architecture to store and manipulate group of objects through List, Set, and Map interfaces",
            answer: `<div class="answer-content">
                <h4>Collections Framework Overview:</h4>
                <p>The Java Collections Framework provides a set of interfaces and classes to store and manipulate groups of objects. It includes:</p>
                <ul>
                    <li><strong>Core Interfaces:</strong> Collection, List, Set, Queue, Map</li>
                    <li><strong>Common Implementations:</strong> ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap</li>
                    <li><strong>Utility Classes:</strong> Collections, Arrays</li>
                </ul>
                
                <h4>Collection Hierarchy:</h4>
                <pre><code>Iterable
    └── Collection
        ├── List (Ordered, allows duplicates)
        │    ├── ArrayList (Resizable array)
        │    ├── LinkedList (Doubly linked list)
        │    └── Vector (Synchronized, legacy)
        │         └── Stack (LIFO)
        │
        ├── Set (No duplicates)
        │    ├── HashSet (Hash table)
        │    ├── LinkedHashSet (Maintains insertion order)
        │    └── TreeSet (Sorted)
        │
        └── Queue (FIFO)
             ├── PriorityQueue (Priority heap)
             └── Deque (Double-ended queue)
                  └── ArrayDeque
                      
Map (Not part of Collection interface)
    ├── HashMap (Hash table)
    ├── LinkedHashMap (Maintains insertion order)
    ├── TreeMap (Sorted by keys)
    └── Hashtable (Synchronized, legacy)</code></pre>
                
                <h4>1. List Interface and Implementations:</h4>
                <pre><code>import java.util.*;

public class ListExamples {
    public static void main(String[] args) {
        // ArrayList - Resizable array, fast random access
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.add("Banana"); // Duplicates allowed
        arrayList.add(1, "Mango"); // Insert at index
        
        System.out.println("ArrayList: " + arrayList);
        System.out.println("Element at index 2: " + arrayList.get(2));
        System.out.println("Contains 'Apple': " + arrayList.contains("Apple"));
        System.out.println("Index of 'Banana': " + arrayList.indexOf("Banana"));
        System.out.println("Last index of 'Banana': " + arrayList.lastIndexOf("Banana"));
        
        // Iteration methods
        System.out.println("\\nIterating ArrayList:");
        // 1. For loop
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println("Index " + i + ": " + arrayList.get(i));
        }
        
        // 2. Enhanced for loop
        for (String fruit : arrayList) {
            System.out.println("Fruit: " + fruit);
        }
        
        // 3. Iterator
        Iterator<String> iterator = arrayList.iterator();
        while (iterator.hasNext()) {
            System.out.println("Iterator: " + iterator.next());
        }
        
        // 4. ListIterator (bidirectional)
        ListIterator<String> listIterator = arrayList.listIterator();
        while (listIterator.hasNext()) {
            String fruit = listIterator.next();
            if (fruit.equals("Banana")) {
                listIterator.set("Blueberry"); // Replace
            }
        }
        System.out.println("After replacement: " + arrayList);
        
        // LinkedList - Doubly linked list, fast insertion/deletion
        List<String> linkedList = new LinkedList<>();
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.addFirst("New First"); // Add at beginning
        linkedList.addLast("Last"); // Add at end
        
        System.out.println("\\nLinkedList: " + linkedList);
        System.out.println("First element: " + ((LinkedList<String>) linkedList).getFirst());
        System.out.println("Last element: " + ((LinkedList<String>) linkedList).getLast());
        
        // Vector - Synchronized, thread-safe
        List<String> vector = new Vector<>();
        vector.add("One");
        vector.add("Two");
        vector.add("Three");
        System.out.println("\\nVector: " + vector);
        
        // Performance comparison
        System.out.println("\\nPerformance Comparison:");
        compareListPerformance();
    }
    
    public static void compareListPerformance() {
        final int SIZE = 100000;
        
        // ArrayList performance
        List<Integer> arrayList = new ArrayList<>();
        long startTime = System.nanoTime();
        for (int i = 0; i < SIZE; i++) {
            arrayList.add(i);
        }
        long arrayListAddTime = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        arrayList.get(SIZE / 2);
        long arrayListGetTime = System.nanoTime() - startTime;
        
        // LinkedList performance
        List<Integer> linkedList = new LinkedList<>();
        startTime = System.nanoTime();
        for (int i = 0; i < SIZE; i++) {
            linkedList.add(i);
        }
        long linkedListAddTime = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        linkedList.get(SIZE / 2);
        long linkedListGetTime = System.nanoTime() - startTime;
        
        System.out.printf("ArrayList - Add: %d ns, Get: %d ns%n", arrayListAddTime, arrayListGetTime);
        System.out.printf("LinkedList - Add: %d ns, Get: %d ns%n", linkedListAddTime, linkedListGetTime);
    }
}</code></pre>
                
                <h4>2. Set Interface and Implementations:</h4>
                <pre><code>import java.util.*;

public class SetExamples {
    public static void main(String[] args) {
        // HashSet - No order, fastest
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Apple"); // Duplicate - ignored
        hashSet.add(null); // Allows one null
        
        System.out.println("HashSet: " + hashSet);
        System.out.println("Size: " + hashSet.size());
        System.out.println("Contains 'Banana': " + hashSet.contains("Banana"));
        
        // LinkedHashSet - Maintains insertion order
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("Zebra");
        linkedHashSet.add("Apple");
        linkedHashSet.add("Monkey");
        linkedHashSet.add("Banana");
        
        System.out.println("\\nLinkedHashSet (insertion order): " + linkedHashSet);
        
        // TreeSet - Sorted order
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Zebra");
        treeSet.add("Apple");
        treeSet.add("Monkey");
        treeSet.add("Banana");
        
        System.out.println("TreeSet (sorted): " + treeSet);
        
        // TreeSet with custom comparator
        Set<String> reverseTreeSet = new TreeSet<>(Collections.reverseOrder());
        reverseTreeSet.addAll(treeSet);
        System.out.println("TreeSet (reverse order): " + reverseTreeSet);
        
        // Set operations
        Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        Set<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));
        
        System.out.println("\\nSet Operations:");
        System.out.println("Set1: " + set1);
        System.out.println("Set2: " + set2);
        
        // Union
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union);
        
        // Intersection
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);
        
        // Difference
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference (set1 - set2): " + difference);
        
        // Symmetric difference
        Set<Integer> symmetricDiff = new HashSet<>(union);
        symmetricDiff.removeAll(intersection);
        System.out.println("Symmetric Difference: " + symmetricDiff);
        
        // Subset check
        Set<Integer> subset = new HashSet<>(Arrays.asList(2, 3));
        System.out.println("Is {2,3} subset of set1? " + set1.containsAll(subset));
        
        // Real-world example: Removing duplicates
        List<String> duplicateList = Arrays.asList("A", "B", "A", "C", "B", "D");
        Set<String> uniqueSet = new LinkedHashSet<>(duplicateList);
        List<String> uniqueList = new ArrayList<>(uniqueSet);
        System.out.println("\\nOriginal list with duplicates: " + duplicateList);
        System.out.println("Unique elements (preserving order): " + uniqueList);
        
        // EnumSet example
        enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }
        
        Set<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
        Set<Day> weekdays = EnumSet.range(Day.MONDAY, Day.FRIDAY);
        Set<Day> allDays = EnumSet.allOf(Day.class);
        
        System.out.println("\\nEnumSet Example:");
        System.out.println("Weekend: " + weekend);
        System.out.println("Weekdays: " + weekdays);
        System.out.println("All days: " + allDays);
    }
}</code></pre>
                
                <h4>3. Map Interface and Implementations:</h4>
                <pre><code>import java.util.*;

public class MapExamples {
    public static void main(String[] args) {
        // HashMap - No order, allows one null key, multiple null values
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Apple", 10);
        hashMap.put("Banana", 20);
        hashMap.put("Cherry", 30);
        hashMap.put(null, 40); // null key allowed
        hashMap.put("Mango", null); // null value allowed
        hashMap.put("Apple", 15); // Overwrites previous value
        
        System.out.println("HashMap: " + hashMap);
        System.out.println("Value for 'Apple': " + hashMap.get("Apple"));
        System.out.println("Contains key 'Banana': " + hashMap.containsKey("Banana"));
        System.out.println("Contains value 30: " + hashMap.containsValue(30));
        System.out.println("Size: " + hashMap.size());
        System.out.println("Is empty: " + hashMap.isEmpty());
        
        // Iterating through HashMap
        System.out.println("\\nIterating HashMap:");
        
        // 1. Using keySet()
        System.out.println("Using keySet():");
        for (String key : hashMap.keySet()) {
            System.out.println("Key: " + key + ", Value: " + hashMap.get(key));
        }
        
        // 2. Using values()
        System.out.println("\\nUsing values():");
        for (Integer value : hashMap.values()) {
            System.out.println("Value: " + value);
        }
        
        // 3. Using entrySet() - Most efficient
        System.out.println("\\nUsing entrySet():");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
        
        // 4. Using forEach (Java 8+)
        System.out.println("\\nUsing forEach:");
        hashMap.forEach((key, value) -> 
            System.out.println("Key: " + key + ", Value: " + value));
        
        // LinkedHashMap - Maintains insertion order
        Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put("Zebra", 100);
        linkedHashMap.put("Apple", 200);
        linkedHashMap.put("Monkey", 300);
        
        System.out.println("\\nLinkedHashMap (insertion order): " + linkedHashMap);
        
        // TreeMap - Sorted by natural order of keys
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Zebra", 100);
        treeMap.put("Apple", 200);
        treeMap.put("Monkey", 300);
        
        System.out.println("TreeMap (sorted keys): " + treeMap);
        
        // TreeMap with custom comparator
        Map<String, Integer> reverseTreeMap = new TreeMap<>(Collections.reverseOrder());
        reverseTreeMap.putAll(treeMap);
        System.out.println("TreeMap (reverse order): " + reverseTreeMap);
        
        // Hashtable - Synchronized, legacy, doesn't allow null
        Map<String, Integer> hashtable = new Hashtable<>();
        hashtable.put("One", 1);
        hashtable.put("Two", 2);
        hashtable.put("Three", 3);
        System.out.println("\\nHashtable: " + hashtable);
        
        // Map operations
        System.out.println("\\nMap Operations:");
        
        // putIfAbsent (Java 8+)
        hashMap.putIfAbsent("Banana", 50); // Won't replace existing
        hashMap.putIfAbsent("Grapes", 60); // Will add new
        System.out.println("After putIfAbsent: " + hashMap);
        
        // getOrDefault (Java 8+)
        int orangeCount = hashMap.getOrDefault("Orange", 0);
        System.out.println("Orange count (default 0): " + orangeCount);
        
        // computeIfAbsent (Java 8+)
        hashMap.computeIfAbsent("Pineapple", key -> 70);
        System.out.println("After computeIfAbsent: " + hashMap);
        
        // computeIfPresent (Java 8+)
        hashMap.computeIfPresent("Apple", (key, value) -> value + 10);
        System.out.println("After computeIfPresent: " + hashMap);
        
        // merge (Java 8+)
        hashMap.merge("Apple", 5, (oldValue, newValue) -> oldValue + newValue);
        System.out.println("After merge: " + hashMap);
        
        // remove with value check
        boolean removed = hashMap.remove("Banana", 20);
        System.out.println("Removed Banana with value 20? " + removed);
        
        // replace
        hashMap.replace("Cherry", 35);
        System.out.println("After replace: " + hashMap);
        
        // replace with old value check
        boolean replaced = hashMap.replace("Cherry", 35, 40);
        System.out.println("Replaced Cherry 35 with 40? " + replaced);
        
        // Real-world example: Word frequency counter
        System.out.println("\\nWord Frequency Counter:");
        String text = "hello world hello java world programming java hello";
        String[] words = text.split(" ");
        
        Map<String, Integer> wordFrequency = new HashMap<>();
        for (String word : words) {
            wordFrequency.merge(word, 1, Integer::sum);
        }
        
        System.out.println("Word frequencies: " + wordFrequency);
        
        // Find most frequent word
        String mostFrequent = null;
        int maxFrequency = 0;
        for (Map.Entry<String, Integer> entry : wordFrequency.entrySet()) {
            if (entry.getValue() > maxFrequency) {
                maxFrequency = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }
        System.out.println("Most frequent word: '" + mostFrequent + "' with count: " + maxFrequency);
        
        // Sort by frequency (descending)
        System.out.println("\\nWords sorted by frequency (descending):");
        wordFrequency.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
    }
}</code></pre>
                
                <h4>4. Queue and Deque Interfaces:</h4>
                <pre><code>import java.util.*;

public class QueueExamples {
    public static void main(String[] args) {
        // Queue implementations
        
        // PriorityQueue - Natural ordering or custom comparator
        Queue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.add(30);
        priorityQueue.add(10);
        priorityQueue.add(20);
        priorityQueue.add(5);
        
        System.out.println("PriorityQueue (natural order):");
        while (!priorityQueue.isEmpty()) {
            System.out.print(priorityQueue.poll() + " "); // Retrieves and removes
        }
        
        // PriorityQueue with custom comparator
        Queue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(Arrays.asList(30, 10, 20, 5));
        
        System.out.println("\\n\\nMax Heap (reverse order):");
        while (!maxHeap.isEmpty()) {
            System.out.print(maxHeap.poll() + " ");
        }
        
        // Deque implementations
        Deque<String> arrayDeque = new ArrayDeque<>();
        
        // Add elements
        arrayDeque.addFirst("First");
        arrayDeque.addLast("Last");
        arrayDeque.offerFirst("New First"); // Returns false if capacity full
        arrayDeque.offerLast("New Last");
        
        System.out.println("\\n\\nArrayDeque: " + arrayDeque);
        
        // Access elements
        System.out.println("First element: " + arrayDeque.peekFirst());
        System.out.println("Last element: " + arrayDeque.peekLast());
        
        // Remove elements
        System.out.println("Removed first: " + arrayDeque.pollFirst());
        System.out.println("Removed last: " + arrayDeque.pollLast());
        System.out.println("After removal: " + arrayDeque);
        
        // Stack operations using Deque
        Deque<String> stack = new ArrayDeque<>();
        stack.push("Element 1");
        stack.push("Element 2");
        stack.push("Element 3");
        
        System.out.println("\\nStack (using Deque):");
        while (!stack.isEmpty()) {
            System.out.println("Popped: " + stack.pop());
        }
        
        // Real-world example: Task scheduler
        System.out.println("\\nTask Scheduler Example:");
        
        class Task {
            String name;
            int priority;
            
            Task(String name, int priority) {
                this.name = name;
                this.priority = priority;
            }
            
            @Override
            public String toString() {
                return name + " (Priority: " + priority + ")";
            }
        }
        
        // Priority queue for tasks
        Queue<Task> taskQueue = new PriorityQueue<>(
            Comparator.comparingInt(task -> -task.priority) // Higher priority first
        );
        
        taskQueue.add(new Task("Email client", 1));
        taskQueue.add(new Task("Critical bug fix", 10));
        taskQueue.add(new Task("Documentation", 2));
        taskQueue.add(new Task("Security patch", 9));
        
        System.out.println("Processing tasks by priority:");
        while (!taskQueue.isEmpty()) {
            System.out.println("Processing: " + taskQueue.poll());
        }
        
        // Real-world example: Recent files (using LinkedHashMap as LRU Cache)
        System.out.println("\\nLRU Cache Example (Recent Files):");
        
        class LRUCache<K, V> extends LinkedHashMap<K, V> {
            private final int capacity;
            
            public LRUCache(int capacity) {
                super(capacity, 0.75f, true); // accessOrder = true for LRU
                this.capacity = capacity;
            }
            
            @Override
            protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                return size() > capacity;
            }
        }
        
        LRUCache<String, String> recentFiles = new LRUCache<>(3);
        recentFiles.put("file1.txt", "Content 1");
        recentFiles.put("file2.txt", "Content 2");
        recentFiles.put("file3.txt", "Content 3");
        
        System.out.println("Cache after adding 3 files: " + recentFiles.keySet());
        
        // Access file1 to make it most recent
        recentFiles.get("file1.txt");
        
        // Add new file - should remove least recently used
        recentFiles.put("file4.txt", "Content 4");
        
        System.out.println("Cache after accessing file1 and adding file4: " + recentFiles.keySet());
    }
}</code></pre>
                
                <h4>5. Collections Utility Class:</h4>
                <pre><code>import java.util.*;

public class CollectionsUtility {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("Banana", "Apple", "Cherry", "Date"));
        
        // Sorting
        Collections.sort(list);
        System.out.println("Sorted list: " + list);
        
        // Reverse order
        Collections.sort(list, Collections.reverseOrder());
        System.out.println("Reverse sorted: " + list);
        
        // Shuffle
        Collections.shuffle(list);
        System.out.println("Shuffled: " + list);
        
        // Binary search (list must be sorted)
        Collections.sort(list);
        int index = Collections.binarySearch(list, "Cherry");
        System.out.println("Index of 'Cherry': " + index);
        
        // Reverse list
        Collections.reverse(list);
        System.out.println("Reversed: " + list);
        
        // Rotate
        Collections.rotate(list, 2);
        System.out.println("Rotated by 2: " + list);
        
        // Swap elements
        Collections.swap(list, 0, list.size() - 1);
        System.out.println("After swap: " + list);
        
        // Fill
        Collections.fill(list, "Filled");
        System.out.println("After fill: " + list);
        
        // Frequency
        list = Arrays.asList("A", "B", "A", "C", "A", "B");
        int freq = Collections.frequency(list, "A");
        System.out.println("Frequency of 'A': " + freq);
        
        // Disjoint (no common elements)
        List<String> list1 = Arrays.asList("A", "B", "C");
        List<String> list2 = Arrays.asList("D", "E", "F");
        List<String> list3 = Arrays.asList("C", "D", "E");
        
        System.out.println("list1 and list2 disjoint? " + Collections.disjoint(list1, list2));
        System.out.println("list1 and list3 disjoint? " + Collections.disjoint(list1, list3));
        
        // Synchronized collections
        List<String> syncList = Collections.synchronizedList(new ArrayList<>());
        Set<String> syncSet = Collections.synchronizedSet(new HashSet<>());
        Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());
        
        // Unmodifiable collections
        List<String> unmodifiableList = Collections.unmodifiableList(list1);
        Set<String> unmodifiableSet = Collections.unmodifiableSet(new HashSet<>(list1));
        Map<String, String> unmodifiableMap = Collections.unmodifiableMap(
            Map.of("key1", "value1", "key2", "value2"));
        
        try {
            unmodifiableList.add("New"); // Will throw UnsupportedOperationException
        } catch (UnsupportedOperationException e) {
            System.out.println("Cannot modify unmodifiable list");
        }
        
        // Empty collections
        List<String> emptyList = Collections.emptyList();
        Set<String> emptySet = Collections.emptySet();
        Map<String, String> emptyMap = Collections.emptyMap();
        
        // Singleton collections
        List<String> singletonList = Collections.singletonList("Single");
        Set<String> singletonSet = Collections.singleton("Single");
        Map<String, String> singletonMap = Collections.singletonMap("key", "value");
        
        System.out.println("Singleton list: " + singletonList);
        
        // Checked collections (type-safe at runtime)
        List rawList = new ArrayList();
        List<String> checkedList = Collections.checkedList(rawList, String.class);
        
        try {
            checkedList.add("Valid");
            rawList.add(123); // Will throw ClassCastException at runtime
        } catch (ClassCastException e) {
            System.out.println("Type violation caught: " + e.getMessage());
        }
        
        // Min and max
        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9, 3);
        System.out.println("Min: " + Collections.min(numbers));
        System.out.println("Max: " + Collections.max(numbers));
        
        // Comparator for min/max
        System.out.println("Min (reverse order): " + Collections.min(numbers, Collections.reverseOrder()));
        
        // Copy
        List<String> source = Arrays.asList("A", "B", "C");
        List<String> destination = new ArrayList<>(Arrays.asList("D", "E", "F", "G"));
        Collections.copy(destination, source);
        System.out.println("After copy: " + destination);
        
        // Add all
        Collections.addAll(destination, "H", "I", "J");
        System.out.println("After addAll: " + destination);
    }
}</code></pre>
                
                <h4>6. Java 8+ Features in Collections:</h4>
                <pre><code>import java.util.*;
import java.util.stream.Collectors;

public class Java8Collections {
    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("Apple", "Banana", "Cherry", "Date", "Elderberry");
        
        // 1. forEach with lambda
        System.out.println("Using forEach:");
        fruits.forEach(fruit -> System.out.println(fruit));
        
        // 2. Method reference
        System.out.println("\\nUsing method reference:");
        fruits.forEach(System.out::println);
        
        // 3. removeIf
        List<String> mutableFruits = new ArrayList<>(fruits);
        mutableFruits.removeIf(fruit -> fruit.startsWith("A"));
        System.out.println("\\nAfter removeIf (removed starting with A): " + mutableFruits);
        
        // 4. replaceAll
        mutableFruits.replaceAll(String::toUpperCase);
        System.out.println("After replaceAll (uppercase): " + mutableFruits);
        
        // 5. sort with Comparator
        mutableFruits.sort(Comparator.naturalOrder());
        System.out.println("After sort: " + mutableFruits);
        
        // 6. Stream API with collections
        System.out.println("\\nStream Operations:");
        
        // Filter and collect
        List<String> longFruits = fruits.stream()
            .filter(fruit -> fruit.length() > 5)
            .collect(Collectors.toList());
        System.out.println("Fruits with length > 5: " + longFruits);
        
        // Map (transform)
        List<Integer> fruitLengths = fruits.stream()
            .map(String::length)
            .collect(Collectors.toList());
        System.out.println("Fruit lengths: " + fruitLengths);
        
        // Sort
        List<String> sortedFruits = fruits.stream()
            .sorted()
            .collect(Collectors.toList());
        System.out.println("Sorted fruits: " + sortedFruits);
        
        // Reverse sort
        List<String> reverseSorted = fruits.stream()
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
        System.out.println("Reverse sorted: " + reverseSorted);
        
        // Limit and skip
        List<String> limited = fruits.stream()
            .limit(3)
            .collect(Collectors.toList());
        System.out.println("First 3 fruits: " + limited);
        
        // Distinct
        List<String> withDuplicates = Arrays.asList("A", "B", "A", "C", "B");
        List<String> distinct = withDuplicates.stream()
            .distinct()
            .collect(Collectors.toList());
        System.out.println("Distinct: " + distinct);
        
        // AnyMatch, AllMatch, NoneMatch
        boolean anyStartsWithA = fruits.stream().anyMatch(f -> f.startsWith("A"));
        boolean allLengthGT3 = fruits.stream().allMatch(f -> f.length() > 3);
        boolean noneStartsWithZ = fruits.stream().noneMatch(f -> f.startsWith("Z"));
        
        System.out.println("Any starts with A: " + anyStartsWithA);
        System.out.println("All length > 3: " + allLengthGT3);
        System.out.println("None starts with Z: " + noneStartsWithZ);
        
        // FindFirst, FindAny
        Optional<String> first = fruits.stream().findFirst();
        Optional<String> any = fruits.stream().findAny();
        
        System.out.println("First: " + first.orElse("None"));
        System.out.println("Any: " + any.orElse("None"));
        
        // Count
        long count = fruits.stream().count();
        System.out.println("Count: " + count);
        
        // Min, Max with Comparator
        Optional<String> min = fruits.stream().min(Comparator.naturalOrder());
        Optional<String> max = fruits.stream().max(Comparator.naturalOrder());
        
        System.out.println("Min: " + min.orElse("None"));
        System.out.println("Max: " + max.orElse("None"));
        
        // Reduce
        Optional<String> concatenated = fruits.stream()
            .reduce((f1, f2) -> f1 + ", " + f2);
        System.out.println("Concatenated: " + concatenated.orElse(""));
        
        // Grouping
        Map<Integer, List<String>> groupedByLength = fruits.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println("\\nGrouped by length: " + groupedByLength);
        
        // Partitioning
        Map<Boolean, List<String>> partitioned = fruits.stream()
            .collect(Collectors.partitioningBy(f -> f.length() > 5));
        System.out.println("Partitioned by length > 5: " + partitioned);
        
        // Joining
        String joined = fruits.stream()
            .collect(Collectors.joining(", ", "[", "]"));
        System.out.println("Joined: " + joined);
        
        // Summary statistics
        IntSummaryStatistics stats = fruits.stream()
            .mapToInt(String::length)
            .summaryStatistics();
        System.out.println("\\nLength statistics:");
        System.out.println("Count: " + stats.getCount());
        System.out.println("Sum: " + stats.getSum());
        System.out.println("Min: " + stats.getMin());
        System.out.println("Max: " + stats.getMax());
        System.out.println("Average: " + stats.getAverage());
        
        // Parallel stream
        List<String> parallelProcessed = fruits.parallelStream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("\\nParallel processed: " + parallelProcessed);
        
        // Map enhancements in Java 8
        Map<String, Integer> fruitMap = new HashMap<>();
        fruitMap.put("Apple", 10);
        fruitMap.put("Banana", 20);
        
        // computeIfAbsent
        fruitMap.computeIfAbsent("Cherry", k -> 30);
        System.out.println("\\nAfter computeIfAbsent: " + fruitMap);
        
        // computeIfPresent
        fruitMap.computeIfPresent("Apple", (k, v) -> v + 5);
        System.out.println("After computeIfPresent: " + fruitMap);
        
        // merge
        fruitMap.merge("Banana", 5, (oldVal, newVal) -> oldVal + newVal);
        System.out.println("After merge: " + fruitMap);
        
        // getOrDefault
        int orangeCount = fruitMap.getOrDefault("Orange", 0);
        System.out.println("Orange count: " + orangeCount);
        
        // forEach on Map
        System.out.println("\\nMap forEach:");
        fruitMap.forEach((key, value) -> 
            System.out.println(key + ": " + value));
        
        // Map sorting by value
        System.out.println("\\nMap sorted by value:");
        fruitMap.entrySet().stream()
            .sorted(Map.Entry.comparingByValue())
            .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
    }
}</code></pre>
                
                <h4>7. Thread-Safe Collections:</h4>
                <pre><code>import java.util.*;
import java.util.concurrent.*;

public class ConcurrentCollections {
    public static void main(String[] args) throws InterruptedException {
        // ConcurrentHashMap - Thread-safe, better performance than Hashtable
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        concurrentMap.put("A", 1);
        concurrentMap.put("B", 2);
        concurrentMap.put("C", 3);
        
        // Atomic operations
        concurrentMap.compute("A", (key, value) -> value == null ? 1 : value + 1);
        System.out.println("ConcurrentHashMap: " + concurrentMap);
        
        // CopyOnWriteArrayList - Thread-safe for frequent reads, infrequent writes
        List<String> copyOnWriteList = new CopyOnWriteArrayList<>();
        copyOnWriteList.add("Item1");
        copyOnWriteList.add("Item2");
        
        // Iteration is safe even during modification
        System.out.println("CopyOnWriteArrayList: " + copyOnWriteList);
        
        // ConcurrentLinkedQueue - Thread-safe FIFO queue
        Queue<String> concurrentQueue = new ConcurrentLinkedQueue<>();
        concurrentQueue.add("Task1");
        concurrentQueue.add("Task2");
        System.out.println("ConcurrentLinkedQueue: " + concurrentQueue);
        
        // BlockingQueue implementations
        BlockingQueue<String> blockingQueue = new ArrayBlockingQueue<>(10);
        
        // Producer thread
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    String item = "Item" + i;
                    blockingQueue.put(item); // Blocks if queue is full
                    System.out.println("Produced: " + item);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        // Consumer thread
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    String item = blockingQueue.take(); // Blocks if queue is empty
                    System.out.println("Consumed: " + item);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        producer.start();
        consumer.start();
        
        producer.join();
        consumer.join();
        
        // ConcurrentSkipListSet - Thread-safe sorted set
        Set<Integer> skipListSet = new ConcurrentSkipListSet<>();
        skipListSet.add(30);
        skipListSet.add(10);
        skipListSet.add(20);
        System.out.println("\\nConcurrentSkipListSet (sorted): " + skipListSet);
        
        // ConcurrentSkipListMap - Thread-safe sorted map
        ConcurrentSkipListMap<String, Integer> skipListMap = new ConcurrentSkipListMap<>();
        skipListMap.put("Zebra", 100);
        skipListMap.put("Apple", 200);
        skipListMap.put("Monkey", 300);
        System.out.println("ConcurrentSkipListMap: " + skipListMap);
        
        // Thread-safe collections from Collections utility
        List<String> synchronizedList = Collections.synchronizedList(new ArrayList<>());
        Set<String> synchronizedSet = Collections.synchronizedSet(new HashSet<>());
        Map<String, String> synchronizedMap = Collections.synchronizedMap(new HashMap<>());
        
        // When iterating synchronized collections, manual synchronization is needed
        synchronized (synchronizedList) {
            Iterator<String> it = synchronizedList.iterator();
            while (it.hasNext()) {
                System.out.println(it.next());
            }
        }
    }
}</code></pre>
                
                <h4>Best Practices for Collections:</h4>
                <ol>
                    <li>Use interface types for declarations: <code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code></li>
                    <li>Specify initial capacity for large collections</li>
                    <li>Use diamond operator <code>&lt;&gt;</code> for type inference</li>
                    <li>Choose the right collection based on requirements</li>
                    <li>Use <code>Collections.unmodifiableXXX()</code> for read-only views</li>
                    <li>Consider thread safety requirements</li>
                    <li>Use streams for functional operations</li>
                    <li>Prefer <code>Map.forEach()</code> over manual iteration</li>
                    <li>Use <code>computeIfAbsent()</code> and <code>merge()</code> for map operations</li>
                    <li>Consider memory usage for large collections</li>
                </ol>
            </div>`
        }
    ]
},
            
         
    csharp: {
        title: "C#",
        icon: "<i class='fas fa-code'></i>",
        questions: [
            {
                number: 1,
                question: "What is C#?",
                definition: "C# is a modern object-oriented programming language",
                answer: `<div class="answer-content"><h4>Definition:</h4><p>C# is a modern, general-purpose, object-oriented programming language developed by Microsoft. It combines features from C++ and Java.</p></div>`
            },
            {
                number: 2,
                question: "Explain LINQ in C#",
                definition: "Language Integrated Query for data access",
                answer: `<div class="answer-content"><h4>LINQ:</h4><p>Set of language and runtime features that provide built-in support for querying data structures.</p></div>`
            },
            {
                number: 3,
                question: "What are properties in C#?",
                definition: "Provide flexible mechanism to read and write private fields",
                answer: `<div class="answer-content"><h4>Properties:</h4><p>Members that provide a flexible way to read and write the values of private fields.</p></div>`
            },
            {
                number: 4,
                question: "What is async/await in C#?",
                definition: "Asynchronous programming pattern in C#",
                answer: `<div class="answer-content"><h4>Async/Await:</h4><p>Programming pattern for handling asynchronous operations in C#.</p></div>`
            },
            {
                number: 5,
                question: "What are delegates in C#?",
                definition: "Type-safe function pointers",
                answer: `<div class="answer-content"><h4>Delegates:</h4><p>Type-safe references to functions. Enable callback functionality.</p></div>`
            }
        ]
    },



    dbms: {
    title: "Database Management System",
    icon: "<i class='fas fa-database'></i>",
    questions: [
        {
            number: 1,
            question: "What is DBMS? Explain its architecture, components, and advantages over file systems",
            definition: "DBMS is software for creating, managing, and controlling access to databases",
            answer: `<div class="answer-content">
                <h4>Definition:</h4>
                <p>A Database Management System (DBMS) is software that provides an interface to manage databases efficiently. It allows users to define, create, maintain, and control access to the database.</p>
                
                <h4>Three-Schema Architecture:</h4>
                <div class="diagram">
                    <div style="text-align: center; margin: 20px 0;">
                        <div style="background: #e3f2fd; padding: 10px; border: 1px solid #2196f3; margin: 5px; border-radius: 5px;">
                            <strong>External Level</strong><br>
                            User Views (View 1, View 2, View 3)
                        </div>
                        <div style="margin: 5px;">↓ <small>External/Conceptual Mapping</small> ↓</div>
                        <div style="background: #e8f5e9; padding: 10px; border: 1px solid #4caf50; margin: 5px; border-radius: 5px;">
                            <strong>Conceptual Level</strong><br>
                            Community View (Logical Schema)
                        </div>
                        <div style="margin: 5px;">↓ <small>Conceptual/Internal Mapping</small> ↓</div>
                        <div style="background: #fff3e0; padding: 10px; border: 1px solid #ff9800; margin: 5px; border-radius: 5px;">
                            <strong>Internal Level</strong><br>
                            Physical Storage (Internal Schema)
                        </div>
                    </div>
                </div>
                
                <h5>Levels of Abstraction:</h5>
                <ol>
                    <li><strong>External/View Level:</strong> How users see the data (different views for different users)</li>
                    <li><strong>Conceptual/Logical Level:</strong> What data is stored and relationships between data (database administrator view)</li>
                    <li><strong>Internal/Physical Level:</strong> How data is physically stored (storage structures, indexing)</li>
                </ol>
                
                <h4>DBMS Components:</h4>
                <div class="architecture-diagram">
                    <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #2196f3;">Hardware</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>Storage devices</li>
                                <li>Processors</li>
                                <li>Memory</li>
                                <li>I/O devices</li>
                            </ul>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #4caf50;">Software</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>DBMS software</li>
                                <li>OS</li>
                                <li>Network software</li>
                                <li>Application programs</li>
                            </ul>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #ff9800;">Data</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>Operational data</li>
                                <li>Metadata</li>
                                <li>Indexes</li>
                                <li>Data dictionary</li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #9c27b0;">Procedures</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>Database design</li>
                                <li>User training</li>
                                <li>Backup & recovery</li>
                                <li>Security procedures</li>
                            </ul>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #f44336;">Database Access Language</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>DDL (Data Definition)</li>
                                <li>DML (Data Manipulation)</li>
                                <li>DCL (Data Control)</li>
                                <li>TCL (Transaction Control)</li>
                            </ul>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; margin: 0 5px;">
                            <h5 style="color: #607d8b;">Users</h5>
                            <ul style="text-align: left; padding-left: 20px;">
                                <li>DBA</li>
                                <li>Application developers</li>
                                <li>End users</li>
                                <li>Naive users</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h4>DBMS vs File System:</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Aspect</th>
                        <th>File System</th>
                        <th>DBMS</th>
                    </tr>
                    <tr>
                        <td><strong>Data Redundancy</strong></td>
                        <td>High (same data in multiple files)</td>
                        <td>Low (controlled redundancy)</td>
                    </tr>
                    <tr>
                        <td><strong>Data Consistency</strong></td>
                        <td>Poor (inconsistency possible)</td>
                        <td>High (integrity constraints)</td>
                    </tr>
                    <tr>
                        <td><strong>Data Sharing</strong></td>
                        <td>Difficult</td>
                        <td>Easy (multiple users)</td>
                    </tr>
                    <tr>
                        <td><strong>Security</strong></td>
                        <td>Limited (file-level)</td>
                        <td>Granular (user/role based)</td>
                    </tr>
                    <tr>
                        <td><strong>Backup & Recovery</strong></td>
                        <td>Manual</td>
                        <td>Automatic</td>
                    </tr>
                    <tr>
                        <td><strong>Data Integrity</strong></td>
                        <td>No enforcement</td>
                        <td>Constraints enforced</td>
                    </tr>
                    <tr>
                        <td><strong>Concurrent Access</strong></td>
                        <td>Problematic</td>
                        <td>Controlled with transactions</td>
                    </tr>
                    <tr>
                        <td><strong>Data Independence</strong></td>
                        <td>No</td>
                        <td>Yes (logical/physical)</td>
                    </tr>
                </table>
                
                <h4>Advantages of DBMS:</h4>
                <ul>
                    <li><strong>Data Sharing:</strong> Multiple users can access data concurrently</li>
                    <li><strong>Data Integrity:</strong> Constraints ensure accuracy and consistency</li>
                    <li><strong>Security:</strong> Access control and authorization mechanisms</li>
                    <li><strong>Backup and Recovery:</strong> Automatic recovery from failures</li>
                    <li><strong>Data Independence:</strong> Changes in one level don't affect other levels</li>
                    <li><strong>Reduced Data Redundancy:</strong> Minimizes duplicate data</li>
                    <li><strong>Consistency:</strong> Ensures data remains consistent across database</li>
                </ul>
                
                <h4>Types of DBMS:</h4>
                <ol>
                    <li><strong>Hierarchical DBMS:</strong> Tree-like structure (IMS)</li>
                    <li><strong>Network DBMS:</strong> Graph structure (IDMS)</li>
                    <li><strong>Relational DBMS:</strong> Tables with relations (Oracle, MySQL)</li>
                    <li><strong>Object-Oriented DBMS:</strong> Objects and classes (ObjectStore)</li>
                    <li><strong>NoSQL DBMS:</strong> Non-relational (MongoDB, Cassandra)</li>
                </ol>
            </div>`
        },
        {
            number: 2,
            question: "Explain ER Model with detailed examples, relationship types, and ER to Relational mapping",
            definition: "ER Model is a conceptual data model that describes data as entities, attributes, and relationships",
            answer: `<div class="answer-content">
                <h4>Entity-Relationship (ER) Model:</h4>
                <p>The ER model is a high-level data model used to define the data elements and relationships for a specified system. It provides a graphical representation known as ER Diagram.</p>
                
                <h4>Basic Components of ER Model:</h4>
                
                <div class="er-components">
                    <div style="display: flex; justify-content: space-around; margin: 20px 0; flex-wrap: wrap;">
                        <div style="text-align: center; margin: 10px; padding: 15px; border: 2px solid #2196f3; border-radius: 10px; width: 200px;">
                            <div style="font-size: 24px; color: #2196f3;">◼</div>
                            <h5>Entity</h5>
                            <p>Real-world object</p>
                            <small>e.g., Student, Course</small>
                        </div>
                        <div style="text-align: center; margin: 10px; padding: 15px; border: 2px solid #4caf50; border-radius: 10px; width: 200px;">
                            <div style="font-size: 24px; color: #4caf50;">○</div>
                            <h5>Attribute</h5>
                            <p>Property of entity</p>
                            <small>e.g., Name, Age</small>
                        </div>
                        <div style="text-align: center; margin: 10px; padding: 15px; border: 2px solid #ff9800; border-radius: 10px; width: 200px;">
                            <div style="font-size: 24px; color: #ff9800;">⟷</div>
                            <h5>Relationship</h5>
                            <p>Association between entities</p>
                            <small>e.g., Enrolls, Teaches</small>
                        </div>
                    </div>
                </div>
                
                <h4>Types of Entities:</h4>
                <ol>
                    <li><strong>Strong Entity:</strong> Has primary key, independent existence
                        <div style="margin: 10px 0; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                            <strong>Example:</strong> STUDENT (StudentID, Name, Age)
                        </div>
                    </li>
                    <li><strong>Weak Entity:</strong> Depends on strong entity, partial key
                        <div style="margin: 10px 0; padding: 10px; background: #fff3e0; border-radius: 5px;">
                            <strong>Example:</strong> DEPENDENT (Name, Relation) depends on EMPLOYEE
                        </div>
                    </li>
                </ol>
                
                <h4>Types of Attributes:</h4>
                <div class="attribute-types">
                    <table class="comparison-table">
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Notation</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td><strong>Simple/Atomic</strong></td>
                            <td>Cannot be divided further</td>
                            <td>○</td>
                            <td>StudentID, Age</td>
                        </tr>
                        <tr>
                            <td><strong>Composite</strong></td>
                            <td>Can be divided into sub-parts</td>
                            <td>○ with connecting lines</td>
                            <td>Name (First, Middle, Last)</td>
                        </tr>
                        <tr>
                            <td><strong>Derived</strong></td>
                            <td>Can be derived from other attributes</td>
                            <td>○ with dashed line</td>
                            <td>Age from DateOfBirth</td>
                        </tr>
                        <tr>
                            <td><strong>Single-valued</strong></td>
                            <td>Single value for entity</td>
                            <td>○</td>
                            <td>DateOfBirth</td>
                        </tr>
                        <tr>
                            <td><strong>Multi-valued</strong></td>
                            <td>Multiple values for entity</td>
                            <td>Double ○</td>
                            <td>PhoneNumbers, EmailAddresses</td>
                        </tr>
                        <tr>
                            <td><strong>Key Attribute</strong></td>
                            <td>Uniquely identifies entity</td>
                            <td>○ with underline</td>
                            <td>StudentID, SSN</td>
                        </tr>
                    </table>
                </div>
                
                <h4>Relationship Types with Cardinality:</h4>
                <div class="relationship-diagram">
                    <h5>1. One-to-One (1:1)</h5>
                    <div style="text-align: center; margin: 15px 0; padding: 10px; background: #e3f2fd; border-radius: 5px;">
                        <div style="display: inline-block; padding: 10px; border: 2px solid #2196f3; margin: 5px;">EMPLOYEE</div>
                        <div style="display: inline-block;">←——(1:1)——→</div>
                        <div style="display: inline-block; padding: 10px; border: 2px solid #2196f3; margin: 5px;">COMPANY_CAR</div>
                        <p><small>Each employee assigned one company car, each car assigned to one employee</small></p>
                    </div>
                    
                    <h5>2. One-to-Many (1:N)</h5>
                    <div style="text-align: center; margin: 15px 0; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                        <div style="display: inline-block; padding: 10px; border: 2px solid #4caf50; margin: 5px;">DEPARTMENT</div>
                        <div style="display: inline-block;">←——(1:N)——→</div>
                        <div style="display: inline-block; padding: 10px; border: 2px solid #4caf50; margin: 5px;">EMPLOYEE</div>
                        <p><small>One department has many employees, each employee belongs to one department</small></p>
                    </div>
                    
                    <h5>3. Many-to-One (N:1)</h5>
                    <div style="text-align: center; margin: 15px 0; padding: 10px; background: #fff3e0; border-radius: 5px;">
                        <div style="display: inline-block; padding: 10px; border: 2px solid #ff9800; margin: 5px;">STUDENT</div>
                        <div style="display: inline-block;">←——(N:1)——→</div>
                        <div style="display: inline-block; padding: 10px; border: 2px solid #ff9800; margin: 5px;">ADVISOR</div>
                        <p><small>Many students can have one advisor, one advisor advises many students</small></p>
                    </div>
                    
                    <h5>4. Many-to-Many (M:N)</h5>
                    <div style="text-align: center; margin: 15px 0; padding: 10px; background: #f3e5f5; border-radius: 5px;">
                        <div style="display: inline-block; padding: 10px; border: 2px solid #9c27b0; margin: 5px;">STUDENT</div>
                        <div style="display: inline-block;">←——(M:N)——→</div>
                        <div style="display: inline-block; padding: 10px; border: 2px solid #9c27b0; margin: 5px;">COURSE</div>
                        <p><small>One student enrolls in many courses, one course has many students</small></p>
                    </div>
                </div>
                
                <h4>Complete ER Diagram Example - University Database:</h4>
                <div style="border: 2px solid #666; padding: 20px; border-radius: 10px; background: #f9f9f9; margin: 20px 0;">
                    <h5 style="text-align: center; color: #333;">University Database ER Diagram</h5>
                    <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">
                        
                        <!-- Student Entity -->
                        <div style="border: 2px solid #2196f3; border-radius: 5px; padding: 15px; margin: 10px; background: white; min-width: 150px;">
                            <div style="text-align: center; font-weight: bold; color: #2196f3;">STUDENT</div>
                            <hr>
                            <div>StudentID <u>(PK)</u></div>
                            <div>Name</div>
                            <div>DateOfBirth</div>
                            <div>Department</div>
                        </div>
                        
                        <!-- Relationships -->
                        <div style="text-align: center; margin: 10px;">
                            <div>ENROLLS<br><small>M:N</small></div>
                            <div style="font-size: 24px;">⟷</div>
                        </div>
                        
                        <!-- Course Entity -->
                        <div style="border: 2px solid #4caf50; border-radius: 5px; padding: 15px; margin: 10px; background: white; min-width: 150px;">
                            <div style="text-align: center; font-weight: bold; color: #4caf50;">COURSE</div>
                            <hr>
                            <div>CourseID <u>(PK)</u></div>
                            <div>Title</div>
                            <div>Credits</div>
                            <div>Department</div>
                        </div>
                        
                        <div style="width: 100%; margin: 20px 0;"></div>
                        
                        <!-- Department Entity -->
                        <div style="border: 2px solid #ff9800; border-radius: 5px; padding: 15px; margin: 10px; background: white; min-width: 150px;">
                            <div style="text-align: center; font-weight: bold; color: #ff9800;">DEPARTMENT</div>
                            <hr>
                            <div>DeptID <u>(PK)</u></div>
                            <div>DeptName</div>
                            <div>Location</div>
                        </div>
                        
                        <!-- Relationships -->
                        <div style="text-align: center; margin: 10px;">
                            <div>HAS<br><small>1:N</small></div>
                            <div style="font-size: 24px;">↓</div>
                        </div>
                        
                        <!-- Faculty Entity -->
                        <div style="border: 2px solid #9c27b0; border-radius: 5px; padding: 15px; margin: 10px; background: white; min-width: 150px;">
                            <div style="text-align: center; font-weight: bold; color: #9c27b0;">FACULTY</div>
                            <hr>
                            <div>FacultyID <u>(PK)</u></div>
                            <div>Name</div>
                            <div>Rank</div>
                            <div>DeptID (FK)</div>
                        </div>
                        
                        <!-- Relationship -->
                        <div style="text-align: center; margin: 10px;">
                            <div>TEACHES<br><small>1:N</small></div>
                            <div style="font-size: 24px;">→</div>
                        </div>
                        
                        <!-- Enrolls Relationship Table -->
                        <div style="border: 2px dashed #666; border-radius: 5px; padding: 15px; margin: 10px; background: #fffde7; min-width: 150px;">
                            <div style="text-align: center; font-weight: bold; color: #666;">ENROLLMENT</div>
                            <hr>
                            <div>EnrollmentID <u>(PK)</u></div>
                            <div>StudentID (FK)</div>
                            <div>CourseID (FK)</div>
                            <div>Grade</div>
                            <div>Semester</div>
                        </div>
                    </div>
                </div>
                
                <h4>ER to Relational Mapping Rules:</h4>
                <ol>
                    <li><strong>Strong Entity:</strong> Create table with all attributes, primary key from key attribute</li>
                    <li><strong>Weak Entity:</strong> Create table with partial key and foreign key to owner entity</li>
                    <li><strong>1:1 Relationship:</strong> Add foreign key to either table or create new table</li>
                    <li><strong>1:N Relationship:</strong> Add foreign key to the 'many' side table</li>
                    <li><strong>M:N Relationship:</strong> Create new relation table with foreign keys from both entities</li>
                    <li><strong>Composite Attribute:</strong> Create separate columns for each component</li>
                    <li><strong>Multi-valued Attribute:</strong> Create separate table</li>
                </ol>
                
                <h4>Enhanced ER Features:</h4>
                <ul>
                    <li><strong>Generalization:</strong> Bottom-up (Student → Person)</li>
                    <li><strong>Specialization:</strong> Top-down (Person → Student, Faculty)</li>
                    <li><strong>Aggregation:</strong> Treat relationship as entity</li>
                    <li><strong>ISA Relationship:</strong> Inheritance hierarchy</li>
                </ul>
            </div>`
        },
        {
            number: 3,
            question: "Explain Normalization in DBMS with detailed examples up to BCNF. Why is it important?",
            definition: "Normalization is the process of organizing data to minimize redundancy and dependency",
            answer: `<div class="answer-content">
                <h4>What is Normalization?</h4>
                <p>Normalization is a systematic approach of decomposing tables to eliminate data redundancy and undesirable characteristics like Insertion, Update, and Deletion Anomalies.</p>
                
                <h4>Normal Forms with Examples:</h4>
                
                <div class="normalization-process">
                    <div style="text-align: center; margin: 20px 0;">
                        <div style="display: inline-block; padding: 10px 20px; margin: 5px; background: #ffebee; border: 2px solid #f44336; border-radius: 5px;">
                            <strong>Unnormalized Form (UNF)</strong>
                        </div>
                        <div style="display: inline-block; margin: 0 10px;">→</div>
                        <div style="display: inline-block; padding: 10px 20px; margin: 5px; background: #fff3e0; border: 2px solid #ff9800; border-radius: 5px;">
                            <strong>1NF</strong>
                        </div>
                        <div style="display: inline-block; margin: 0 10px;">→</div>
                        <div style="display: inline-block; padding: 10px 20px; margin: 5px; background: #fffde7; border: 2px solid #ffeb3b; border-radius: 5px;">
                            <strong>2NF</strong>
                        </div>
                        <div style="display: inline-block; margin: 0 10px;">→</div>
                        <div style="display: inline-block; padding: 10px 20px; margin: 5px; background: #e8f5e9; border: 2px solid #4caf50; border-radius: 5px;">
                            <strong>3NF</strong>
                        </div>
                        <div style="display: inline-block; margin: 0 10px;">→</div>
                        <div style="display: inline-block; padding: 10px 20px; margin: 5px; background: #e3f2fd; border: 2px solid #2196f3; border-radius: 5px;">
                            <strong>BCNF</strong>
                        </div>
                    </div>
                </div>
                
                <h5>1. First Normal Form (1NF) - Example:</h5>
                <p><strong>Rule:</strong> Each table cell should contain single value, eliminate repeating groups</p>
                
                <div style="margin: 15px 0;">
                    <h6>Before 1NF (Violates 1NF):</h6>
                    <table class="db-table">
                        <tr>
                            <th>StudentID</th>
                            <th>Name</th>
                            <th>Courses</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>Math, Science, English</td>
                            <td>123456, 789012</td>
                        </tr>
                    </table>
                    <p><small>Problems: Multi-valued attributes (Courses, Phone)</small></p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h6>After 1NF:</h6>
                    <table class="db-table">
                        <tr>
                            <th>StudentID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Phone</th>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>Math</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>Science</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>English</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>Math</td>
                            <td>789012</td>
                        </tr>
                    </table>
                </div>
                
                <h5>2. Second Normal Form (2NF) - Example:</h5>
                <p><strong>Rule:</strong> Should be in 1NF + No partial dependency (all non-key attributes fully functionally dependent on primary key)</p>
                
                <div style="margin: 15px 0;">
                    <h6>Table violating 2NF:</h6>
                    <table class="db-table">
                        <tr>
                            <th>OrderID</th>
                            <th>ProductID</th>
                            <th>ProductName</th>
                            <th>Quantity</th>
                            <th>CustomerName</th>
                        </tr>
                        <tr>
                            <td>O001</td>
                            <td>P101</td>
                            <td>Laptop</td>
                            <td>2</td>
                            <td>John</td>
                        </tr>
                    </table>
                    <p><small>Composite Primary Key: {OrderID, ProductID}</small></p>
                    <p><small>Problem: ProductName depends only on ProductID (partial dependency)</small></p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h6>After 2NF Decomposition:</h6>
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="margin: 10px;">
                            <h6>Order_Product Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>OrderID</th>
                                    <th>ProductID</th>
                                    <th>Quantity</th>
                                </tr>
                                <tr>
                                    <td>O001</td>
                                    <td>P101</td>
                                    <td>2</td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin: 10px;">
                            <h6>Product Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>ProductID</th>
                                    <th>ProductName</th>
                                </tr>
                                <tr>
                                    <td>P101</td>
                                    <td>Laptop</td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin: 10px;">
                            <h6>Order Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>OrderID</th>
                                    <th>CustomerName</th>
                                </tr>
                                <tr>
                                    <td>O001</td>
                                    <td>John</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
                <h5>3. Third Normal Form (3NF) - Example:</h5>
                <p><strong>Rule:</strong> Should be in 2NF + No transitive dependency (non-prime attribute should not depend on another non-prime attribute)</p>
                
                <div style="margin: 15px 0;">
                    <h6>Table violating 3NF:</h6>
                    <table class="db-table">
                        <tr>
                            <th>StudentID</th>
                            <th>Name</th>
                            <th>DeptID</th>
                            <th>DeptName</th>
                            <th>DeptLocation</th>
                        </tr>
                        <tr>
                            <td>S101</td>
                            <td>John</td>
                            <td>D01</td>
                            <td>CS</td>
                            <td>Building A</td>
                        </tr>
                    </table>
                    <p><small>Primary Key: StudentID</small></p>
                    <p><small>Transitive Dependency: StudentID → DeptID → DeptName, DeptLocation</small></p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h6>After 3NF Decomposition:</h6>
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="margin: 10px;">
                            <h6>Student Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>StudentID</th>
                                    <th>Name</th>
                                    <th>DeptID</th>
                                </tr>
                                <tr>
                                    <td>S101</td>
                                    <td>John</td>
                                    <td>D01</td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin: 10px;">
                            <h6>Department Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>DeptID</th>
                                    <th>DeptName</th>
                                    <th>DeptLocation</th>
                                </tr>
                                <tr>
                                    <td>D01</td>
                                    <td>CS</td>
                                    <td>Building A</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
                <h5>4. Boyce-Codd Normal Form (BCNF) - Example:</h5>
                <p><strong>Rule:</strong> Stronger than 3NF. For every functional dependency X → Y, X should be super key</p>
                
                <div style="margin: 15px 0;">
                    <h6>Table violating BCNF:</h6>
                    <table class="db-table">
                        <tr>
                            <th>Student</th>
                            <th>Course</th>
                            <th>Professor</th>
                        </tr>
                        <tr>
                            <td>S1</td>
                            <td>C1</td>
                            <td>P1</td>
                        </tr>
                        <tr>
                            <td>S2</td>
                            <td>C1</td>
                            <td>P1</td>
                        </tr>
                        <tr>
                            <td>S1</td>
                            <td>C2</td>
                            <td>P2</td>
                        </tr>
                    </table>
                    <p><small>Functional Dependencies:</small></p>
                    <ul>
                        <li>Student, Course → Professor</li>
                        <li>Professor → Course</li>
                    </ul>
                    <p><small>Problem: Professor → Course but Professor is not super key</small></p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h6>After BCNF Decomposition:</h6>
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="margin: 10px;">
                            <h6>Teaching Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>Professor</th>
                                    <th>Course</th>
                                </tr>
                                <tr>
                                    <td>P1</td>
                                    <td>C1</td>
                                </tr>
                                <tr>
                                    <td>P2</td>
                                    <td>C2</td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin: 10px;">
                            <h6>Enrollment Table:</h6>
                            <table class="db-table">
                                <tr>
                                    <th>Student</th>
                                    <th>Professor</th>
                                </tr>
                                <tr>
                                    <td>S1</td>
                                    <td>P1</td>
                                </tr>
                                <tr>
                                    <td>S2</td>
                                    <td>P1</td>
                                </tr>
                                <tr>
                                    <td>S1</td>
                                    <td>P2</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
                <h4>Higher Normal Forms:</h4>
                <ul>
                    <li><strong>4NF (Fourth Normal Form):</strong> No multi-valued dependencies</li>
                    <li><strong>5NF (Fifth Normal Form):</strong> No join dependency</li>
                    <li><strong>6NF (Sixth Normal Form):</strong> Domain-key normal form</li>
                </ul>
                
                <h4>Anomalies Eliminated by Normalization:</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Anomaly Type</th>
                        <th>Description</th>
                        <th>Example</th>
                        <th>Solution</th>
                    </tr>
                    <tr>
                        <td><strong>Insertion</strong></td>
                        <td>Cannot insert data without other data</td>
                        <td>Cannot add department without employee</td>
                        <td>Normalization separates tables</td>
                    </tr>
                    <tr>
                        <td><strong>Update</strong></td>
                        <td>Updating data in multiple places</td>
                        <td>Change dept name in multiple rows</td>
                        <td>Single source of truth</td>
                    </tr>
                    <tr>
                        <td><strong>Deletion</strong></td>
                        <td>Deleting data removes other data</td>
                        <td>Delete employee removes department info</td>
                        <td>Separate related data</td>
                    </tr>
                </table>
                
                <h4>When to Stop Normalizing?</h4>
                <ul>
                    <li>When performance becomes an issue (too many joins)</li>
                    <li>When data is mostly read-only</li>
                    <li>When denormalization improves performance</li>
                    <li>For data warehouse designs (different requirements)</li>
                </ul>
                
                <h4>Functional Dependencies:</h4>
                <p>Core concept in normalization. X → Y means Y is functionally dependent on X.</p>
                <ul>
                    <li><strong>Full Functional Dependency:</strong> Y depends on entire X, not subset</li>
                    <li><strong>Partial Dependency:</strong> Y depends on subset of X</li>
                    <li><strong>Transitive Dependency:</strong> X → Y and Y → Z, then X → Z</li>
                    <li><strong>Trivial FD:</strong> Y is subset of X</li>
                </ul>
            </div>`
        },
        {
            number: 4,
            question: "Explain SQL commands with examples: DDL, DML, DCL, TCL. What are joins, subqueries, and indexes?",
            definition: "SQL is standard language for managing relational databases with various types of commands",
            answer: `<div class="answer-content">
                <h4>SQL Command Categories:</h4>
                
                <div class="sql-categories">
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px; text-align: center;">
                            <h5 style="color: #2196f3;">DDL</h5>
                            <p>Data Definition Language</p>
                            <small>CREATE, ALTER, DROP, TRUNCATE, RENAME</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px; text-align: center;">
                            <h5 style="color: #4caf50;">DML</h5>
                            <p>Data Manipulation Language</p>
                            <small>SELECT, INSERT, UPDATE, DELETE</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px; text-align: center;">
                            <h5 style="color: #ff9800;">DCL</h5>
                            <p>Data Control Language</p>
                            <small>GRANT, REVOKE</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #f3e5f5; border-radius: 10px; text-align: center;">
                            <h5 style="color: #9c27b0;">TCL</h5>
                            <p>Transaction Control Language</p>
                            <small>COMMIT, ROLLBACK, SAVEPOINT</small>
                        </div>
                    </div>
                </div>
                
                <h4>1. DDL Commands (Data Definition Language):</h4>
                <p>Used to define and modify database structure.</p>
                
                <h5>CREATE TABLE:</h5>
                <pre><code>CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT CHECK (Age >= 18),
    Email VARCHAR(100) UNIQUE,
    DeptID INT,
    JoinDate DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);</code></pre>
                
                <h5>ALTER TABLE:</h5>
                <pre><code>-- Add column
ALTER TABLE Students ADD Phone VARCHAR(15);

-- Modify column
ALTER TABLE Students MODIFY Name VARCHAR(100);

-- Drop column
ALTER TABLE Students DROP COLUMN Phone;

-- Add constraint
ALTER TABLE Students ADD CONSTRAINT chk_age CHECK (Age BETWEEN 18 AND 60);</code></pre>
                
                <h5>DROP vs TRUNCATE vs DELETE:</h5>
                <table class="comparison-table">
                    <tr>
                        <th>Aspect</th>
                        <th>DELETE</th>
                        <th>TRUNCATE</th>
                        <th>DROP</th>
                    </tr>
                    <tr>
                        <td><strong>Type</strong></td>
                        <td>DML</td>
                        <td>DDL</td>
                        <td>DDL</td>
                    </tr>
                    <tr>
                        <td><strong>Where Clause</strong></td>
                        <td>Yes (can delete specific rows)</td>
                        <td>No (deletes all rows)</td>
                        <td>No (deletes entire table)</td>
                    </tr>
                    <tr>
                        <td><strong>Rollback</strong></td>
                        <td>Possible</td>
                        <td>Not possible</td>
                        <td>Not possible</td>
                    </tr>
                    <tr>
                        <td><strong>Auto-increment Reset</strong></td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><strong>Speed</strong></td>
                        <td>Slow (row by row)</td>
                        <td>Fast</td>
                        <td>Fast</td>
                    </tr>
                </table>
                
                <h4>2. DML Commands (Data Manipulation Language):</h4>
                
                <h5>SELECT with Clauses:</h5>
                <pre><code>-- Basic SELECT
SELECT * FROM Students;

-- SELECT with WHERE
SELECT Name, Age FROM Students WHERE Age > 20;

-- SELECT with ORDER BY
SELECT * FROM Students ORDER BY Name ASC, Age DESC;

-- SELECT with GROUP BY and HAVING
SELECT DeptID, COUNT(*) as TotalStudents, AVG(Age) as AvgAge
FROM Students
GROUP BY DeptID
HAVING COUNT(*) > 10;

-- SELECT with LIMIT (or TOP in SQL Server)
SELECT * FROM Students LIMIT 10 OFFSET 20;</code></pre>
                
                <h5>INSERT, UPDATE, DELETE:</h5>
                <pre><code>-- INSERT
INSERT INTO Students (StudentID, Name, Age) 
VALUES (101, 'John Doe', 21);

-- INSERT multiple rows
INSERT INTO Students VALUES 
(102, 'Jane Smith', 22, 'jane@email.com', 1),
(103, 'Bob Wilson', 20, 'bob@email.com', 2);

-- UPDATE
UPDATE Students 
SET Age = Age + 1, Email = 'new@email.com'
WHERE StudentID = 101;

-- DELETE
DELETE FROM Students WHERE Age < 18;</code></pre>
                
                <h4>SQL Joins with Visual Diagram:</h4>
                <div style="text-align: center; margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: inline-block; margin: 10px;">
                        <div style="border: 2px solid #2196f3; padding: 10px; border-radius: 5px; background: white;">
                            Table A
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">1</div>
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">2</div>
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">3</div>
                        </div>
                    </div>
                    <div style="display: inline-block; margin: 10px;">
                        <div style="border: 2px solid #4caf50; padding: 10px; border-radius: 5px; background: white;">
                            Table B
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">3</div>
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">4</div>
                            <div style="margin: 5px; padding: 5px; border: 1px solid #ccc;">5</div>
                        </div>
                    </div>
                </div>
                
                <h5>Types of Joins:</h5>
                <pre><code>-- INNER JOIN (returns matching rows)
SELECT s.Name, d.DeptName
FROM Students s
INNER JOIN Departments d ON s.DeptID = d.DeptID;

-- LEFT JOIN (all from left + matching from right)
SELECT s.Name, d.DeptName
FROM Students s
LEFT JOIN Departments d ON s.DeptID = d.DeptID;

-- RIGHT JOIN (all from right + matching from left)
SELECT s.Name, d.DeptName
FROM Students s
RIGHT JOIN Departments d ON s.DeptID = d.DeptID;

-- FULL OUTER JOIN (all from both)
SELECT s.Name, d.DeptName
FROM Students s
FULL OUTER JOIN Departments d ON s.DeptID = d.DeptID;

-- CROSS JOIN (cartesian product)
SELECT s.Name, d.DeptName
FROM Students s
CROSS JOIN Departments d;

-- SELF JOIN
SELECT e1.Name as Employee, e2.Name as Manager
FROM Employees e1
LEFT JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;</code></pre>
                
                <h4>3. DCL Commands (Data Control Language):</h4>
                <pre><code>-- GRANT privileges
GRANT SELECT, INSERT ON Students TO user1;

-- GRANT all privileges
GRANT ALL PRIVILEGES ON Students TO user1;

-- GRANT with GRANT OPTION
GRANT SELECT ON Students TO user1 WITH GRANT OPTION;

-- REVOKE privileges
REVOKE INSERT ON Students FROM user1;

-- REVOKE all
REVOKE ALL PRIVILEGES ON Students FROM user1;</code></pre>
                
                <h4>4. TCL Commands (Transaction Control Language):</h4>
                <pre><code>BEGIN TRANSACTION;

INSERT INTO Students VALUES (104, 'Alice', 22);
SAVEPOINT sp1;

UPDATE Students SET Age = 23 WHERE StudentID = 104;
SAVEPOINT sp2;

DELETE FROM Students WHERE StudentID = 104;
-- ROLLBACK TO sp2;  -- Undoes DELETE only
-- ROLLBACK TO sp1;  -- Undoes DELETE and UPDATE

COMMIT;  -- Makes all changes permanent
-- ROLLBACK;  -- Undoes all changes</code></pre>
                
                <h4>Subqueries and Nested Queries:</h4>
                <pre><code>-- Single-row subquery
SELECT Name FROM Students 
WHERE Age = (SELECT MAX(Age) FROM Students);

-- Multi-row subquery with IN
SELECT Name FROM Students 
WHERE DeptID IN (SELECT DeptID FROM Departments WHERE Location = 'Building A');

-- Correlated subquery
SELECT s.Name, s.Age
FROM Students s
WHERE Age > (SELECT AVG(Age) FROM Students WHERE DeptID = s.DeptID);

-- Subquery in FROM clause
SELECT dept_name, avg_age
FROM (
    SELECT d.DeptName as dept_name, AVG(s.Age) as avg_age
    FROM Students s
    JOIN Departments d ON s.DeptID = d.DeptID
    GROUP BY d.DeptName
) AS dept_stats
WHERE avg_age > 20;

-- EXISTS subquery
SELECT d.DeptName
FROM Departments d
WHERE EXISTS (
    SELECT 1 FROM Students s 
    WHERE s.DeptID = d.DeptID AND s.Age > 25
);</code></pre>
                
                <h4>Indexes in SQL:</h4>
                <p>Indexes improve query performance but slow down inserts/updates.</p>
                
                <pre><code>-- Create index
CREATE INDEX idx_student_name ON Students(Name);

-- Create unique index
CREATE UNIQUE INDEX idx_student_email ON Students(Email);

-- Create composite index
CREATE INDEX idx_dept_age ON Students(DeptID, Age);

-- Drop index
DROP INDEX idx_student_name ON Students;

-- Show indexes
SHOW INDEX FROM Students;</code></pre>
                
                <h5>Types of Indexes:</h5>
                <ul>
                    <li><strong>Clustered Index:</strong> Determines physical order of data (only one per table)</li>
                    <li><strong>Non-clustered Index:</strong> Separate structure with pointers to data</li>
                    <li><strong>Unique Index:</strong> Ensures all values are unique</li>
                    <li><strong>Composite Index:</strong> Index on multiple columns</li>
                    <li><strong>Full-text Index:</strong> For text searching</li>
                </ul>
                
                <h4>Views in SQL:</h4>
                <pre><code>-- Create view
CREATE VIEW StudentDetails AS
SELECT s.StudentID, s.Name, d.DeptName, s.Age
FROM Students s
JOIN Departments d ON s.DeptID = d.DeptID
WHERE s.Age > 18;

-- Use view
SELECT * FROM StudentDetails WHERE DeptName = 'Computer Science';

-- Update view (if updatable)
UPDATE StudentDetails SET Age = 22 WHERE StudentID = 101;

-- Drop view
DROP VIEW StudentDetails;</code></pre>
                
                <h4>Stored Procedures and Functions:</h4>
                <pre><code>-- Stored Procedure
DELIMITER $$
CREATE PROCEDURE GetStudentsByDept(IN dept_id INT)
BEGIN
    SELECT * FROM Students WHERE DeptID = dept_id;
END $$
DELIMITER ;

-- Call procedure
CALL GetStudentsByDept(1);

-- Function
DELIMITER $$
CREATE FUNCTION GetStudentCount(dept_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE count INT;
    SELECT COUNT(*) INTO count FROM Students WHERE DeptID = dept_id;
    RETURN count;
END $$
DELIMITER ;

-- Use function
SELECT GetStudentCount(1) as StudentCount;</code></pre>
            </div>`
        },
        {
            number: 5,
            question: "Explain ACID properties, transactions, concurrency control, and recovery techniques in DBMS",
            definition: "ACID properties ensure reliable transaction processing in databases",
            answer: `<div class="answer-content">
                <h4>Transaction Management:</h4>
                <p>A transaction is a single logical unit of work that accesses and possibly modifies the contents of a database. It must satisfy ACID properties.</p>
                
                <h4>ACID Properties:</h4>
                <div class="acid-properties">
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin: 20px 0;">
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px; text-align: center; border: 2px solid #2196f3;">
                            <h5 style="color: #2196f3;">A - Atomicity</h5>
                            <p>"All or Nothing"</p>
                            <small>Transaction either completes fully or not at all</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px; text-align: center; border: 2px solid #4caf50;">
                            <h5 style="color: #4caf50;">C - Consistency</h5>
                            <p>"Valid State"</p>
                            <small>Database moves from one consistent state to another</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px; text-align: center; border: 2px solid #ff9800;">
                            <h5 style="color: #ff9800;">I - Isolation</h5>
                            <p>"Independent Execution"</p>
                            <small>Transactions don't interfere with each other</small>
                        </div>
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #f3e5f5; border-radius: 10px; text-align: center; border: 2px solid #9c27b0;">
                            <h5 style="color: #9c27b0;">D - Durability</h5>
                            <p>"Permanent Changes"</p>
                            <small>Committed changes persist despite failures</small>
                        </div>
                    </div>
                </div>
                
                <h4>Transaction States:</h4>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="display: inline-block; padding: 10px; border: 2px solid #2196f3; border-radius: 50%; background: #e3f2fd;">
                        <strong>Active</strong>
                    </div>
                    <div style="display: inline-block; margin: 0 10px;">→</div>
                    <div style="display: inline-block; padding: 10px; border: 2px solid #4caf50; border-radius: 50%; background: #e8f5e9;">
                        <strong>Partially<br>Committed</strong>
                    </div>
                    <div style="display: inline-block; margin: 0 10px;">→</div>
                    <div style="display: inline-block; padding: 10px; border: 2px solid #4caf50; border-radius: 50%; background: #c8e6c9;">
                        <strong>Committed</strong>
                    </div>
                    <div style="display: inline-block; margin: 0 10px;">↓</div>
                    <div style="display: inline-block; padding: 10px; border: 2px solid #f44336; border-radius: 50%; background: #ffebee;">
                        <strong>Failed</strong>
                    </div>
                    <div style="display: inline-block; margin: 0 10px;">→</div>
                    <div style="display: inline-block; padding: 10px; border: 2px solid #9e9e9e; border-radius: 50%; background: #f5f5f5;">
                        <strong>Aborted</strong>
                    </div>
                </div>
                
                <h4>Concurrency Control Problems:</h4>
                
                <h5>1. Dirty Read:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #ffebee; border-radius: 5px;">
                    <p>Reading uncommitted data from another transaction.</p>
                    <pre><code>T1: UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
    -- balance = 400 (not committed yet)

T2: SELECT balance FROM Accounts WHERE id = 1;
    -- Reads 400 (dirty read)

T1: ROLLBACK; -- Transaction fails</code></pre>
                    <p><strong>Problem:</strong> T2 read data that never actually existed in database.</p>
                </div>
                
                <h5>2. Non-repeatable Read:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #fff3e0; border-radius: 5px;">
                    <p>Getting different values when reading same data multiple times in same transaction.</p>
                    <pre><code>T1: SELECT balance FROM Accounts WHERE id = 1;
    -- Returns 500

T2: UPDATE Accounts SET balance = 400 WHERE id = 1;
    COMMIT;

T1: SELECT balance FROM Accounts WHERE id = 1;
    -- Returns 400 (different!)</code></pre>
                </div>
                
                <h5>3. Phantom Read:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                    <p>Getting different number of rows when same query executed multiple times.</p>
                    <pre><code>T1: SELECT COUNT(*) FROM Accounts WHERE balance > 1000;
    -- Returns 5

T2: INSERT INTO Accounts VALUES (6, 1500);
    COMMIT;

T1: SELECT COUNT(*) FROM Accounts WHERE balance > 1000;
    -- Returns 6 (new row appears!)</code></pre>
                </div>
                
                <h5>4. Lost Update:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #e3f2fd; border-radius: 5px;">
                    <p>Two transactions update same data, one update overwrites the other.</p>
                    <pre><code>T1: SELECT balance FROM Accounts WHERE id = 1; -- 500
T2: SELECT balance FROM Accounts WHERE id = 1; -- 500

T1: UPDATE Accounts SET balance = 500 - 100 = 400 WHERE id = 1;
T2: UPDATE Accounts SET balance = 500 - 50 = 450 WHERE id = 1;

-- Final balance = 450 (T1's update lost!)</code></pre>
                </div>
                
                <h4>Transaction Isolation Levels:</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Isolation Level</th>
                        <th>Dirty Read</th>
                        <th>Non-repeatable Read</th>
                        <th>Phantom Read</th>
                        <th>Performance</th>
                    </tr>
                    <tr>
                        <td><strong>READ UNCOMMITTED</strong></td>
                        <td>✅ Allowed</td>
                        <td>✅ Allowed</td>
                        <td>✅ Allowed</td>
                        <td>Fastest</td>
                    </tr>
                    <tr>
                        <td><strong>READ COMMITTED</strong></td>
                        <td>❌ Prevented</td>
                        <td>✅ Allowed</td>
                        <td>✅ Allowed</td>
                        <td>Fast</td>
                    </tr>
                    <tr>
                        <td><strong>REPEATABLE READ</strong></td>
                        <td>❌ Prevented</td>
                        <td>❌ Prevented</td>
                        <td>✅ Allowed</td>
                        <td>Moderate</td>
                    </tr>
                    <tr>
                        <td><strong>SERIALIZABLE</strong></td>
                        <td>❌ Prevented</td>
                        <td>❌ Prevented</td>
                        <td>❌ Prevented</td>
                        <td>Slowest</td>
                    </tr>
                </table>
                
                <h4>Concurrency Control Techniques:</h4>
                
                <h5>1. Lock-Based Protocols:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 5px; min-width: 200px;">
                        <h6>Shared Lock (S-lock)</h6>
                        <ul>
                            <li>For read operations</li>
                            <li>Multiple transactions can hold</li>
                            <li>Compatible with other S-locks</li>
                        </ul>
                    </div>
                    <div style="margin: 10px; padding: 15px; background: #ffebee; border-radius: 5px; min-width: 200px;">
                        <h6>Exclusive Lock (X-lock)</h6>
                        <ul>
                            <li>For write operations</li>
                            <li>Only one transaction can hold</li>
                            <li>Not compatible with any lock</li>
                        </ul>
                    </div>
                </div>
                
                <h5>Lock Compatibility Matrix:</h5>
                <table class="comparison-table" style="width: 300px; margin: 15px auto;">
                    <tr>
                        <th>-</th>
                        <th>S-lock</th>
                        <th>X-lock</th>
                    </tr>
                    <tr>
                        <td><strong>S-lock</strong></td>
                        <td>✅ Compatible</td>
                        <td>❌ Not Compatible</td>
                    </tr>
                    <tr>
                        <td><strong>X-lock</strong></td>
                        <td>❌ Not Compatible</td>
                        <td>❌ Not Compatible</td>
                    </tr>
                </table>
                
                <h5>Two-Phase Locking Protocol (2PL):</h5>
                <div style="margin: 15px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                    <div style="text-align: center;">
                        <div style="display: inline-block; padding: 10px; border-right: 2px solid #2196f3;">
                            <strong>Growing Phase</strong><br>
                            <small>Acquire locks only</small>
                        </div>
                        <div style="display: inline-block; padding: 10px; background: #2196f3; color: white;">
                            <strong>Lock Point</strong>
                        </div>
                        <div style="display: inline-block; padding: 10px; border-left: 2px solid #4caf50;">
                            <strong>Shrinking Phase</strong><br>
                            <small>Release locks only</small>
                        </div>
                    </div>
                </div>
                
                <h5>2. Timestamp Based Protocol:</h5>
                <ul>
                    <li>Each transaction gets unique timestamp</li>
                    <li>Older transaction has higher priority</li>
                    <li>If conflict occurs, younger transaction rolled back</li>
                </ul>
                
                <h5>3. Optimistic Concurrency Control:</h5>
                <ul>
                    <li>Assume conflicts are rare</li>
                    <li>Three phases: Read, Validation, Write</li>
                    <li>Good for read-heavy databases</li>
                </ul>
                
                <h5>4. Multiversion Concurrency Control (MVCC):</h5>
                <ul>
                    <li>Maintain multiple versions of data</li>
                    <li>Readers see consistent snapshot</li>
                    <li>Used by PostgreSQL, Oracle</li>
                </ul>
                
                <h4>Deadlock Handling:</h4>
                <div style="margin: 20px 0; padding: 15px; background: #fff3e0; border-radius: 5px;">
                    <h5>Deadlock Example:</h5>
                    <pre><code>T1: LOCK Account A (Exclusive)
T2: LOCK Account B (Exclusive)

T1: WAIT for LOCK on Account B
T2: WAIT for LOCK on Account A

-- Circular wait: T1 waits for T2, T2 waits for T1</code></pre>
                </div>
                
                <h5>Deadlock Handling Methods:</h5>
                <ol>
                    <li><strong>Deadlock Prevention:</strong>
                        <ul>
                            <li>Wait-Die: Older transaction waits, younger dies</li>
                            <li>Wound-Wait: Older wounds (rolls back) younger</li>
                        </ul>
                    </li>
                    <li><strong>Deadlock Detection:</strong>
                        <ul>
                            <li>Wait-for graph</li>
                            <li>Periodically check for cycles</li>
                        </ul>
                    </li>
                    <li><strong>Deadlock Recovery:</strong>
                        <ul>
                            <li>Choose victim transaction</li>
                            <li>Rollback victim</li>
                            <li>Restart transaction</li>
                        </ul>
                    </li>
                </ol>
                
                <h4>Database Recovery Techniques:</h4>
                
                <h5>1. Log-Based Recovery:</h5>
                <ul>
                    <li><strong>Write-Ahead Logging (WAL):</strong> Log written before actual data</li>
                    <li><strong>Undo:</strong> Rollback uncommitted transactions</li>
                    <li><strong>Redo:</strong> Re-do committed transactions</li>
                </ul>
                
                <h5>2. Checkpoints:</h5>
                <pre><code>-- Checkpoint process
1. Force-write all modified buffers to disk
2. Write checkpoint record to log
3. Store list of active transactions
4. Write log records to stable storage</code></pre>
                
                <h5>Recovery Algorithms:</h5>
                <ol>
                    <li><strong>Deferred Update (No-undo/redo):</strong> Updates only after commit</li>
                    <li><strong>Immediate Update (Undo/redo):</strong> Updates before commit</li>
                    <li><strong>Shadow Paging:</strong> Maintain shadow and current page tables</li>
                </ol>
                
                <h4>Types of Failures:</h4>
                <ul>
                    <li><strong>Transaction Failure:</strong> Logical errors, system errors</li>
                    <li><strong>System Crash:</strong> Power failure, OS failure</li>
                    <li><strong>Media Failure:</strong> Disk head crash, corruption</li>
                </ul>
            </div>`
        },
         
        {
            number: 6,
            question: "Explain indexing in databases: B-Tree, B+ Tree, Hash indexing, Bitmap indexing with detailed structures and comparisons",
            definition: "Indexing is a database optimization technique used to speed up data retrieval operations",
            answer: `<div class="answer-content">
                <h4>What is Database Indexing?</h4>
                <p>Indexing is a data structure technique used to quickly locate and access data in a database. It improves query performance but adds overhead for insert/update/delete operations.</p>
                
                <h4>Index Structures Visualization:</h4>
                
                <h5>1. B-Tree Index Structure:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 10px; border: 1px solid #ddd;">
                    <div style="text-align: center;">
                        <!-- Root Node -->
                        <div style="display: inline-block; padding: 10px; border: 2px solid #2196f3; background: #e3f2fd; border-radius: 5px; margin: 10px;">
                            <div><strong>Root Node</strong></div>
                            <div>[20, 40]</div>
                        </div>
                        
                        <div style="margin: 10px;">
                            <div style="display: inline-block; width: 100px; height: 2px; background: #666;"></div>
                            <div style="display: inline-block; width: 20px; text-align: center;">↓</div>
                            <div style="display: inline-block; width: 100px; height: 2px; background: #666;"></div>
                        </div>
                        
                        <!-- Level 1 Nodes -->
                        <div style="display: flex; justify-content: center; gap: 50px;">
                            <div>
                                <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                    <div>[10, 15]</div>
                                </div>
                                <div style="margin-top: 10px;">
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                    <div style="display: inline-block; width: 10px; text-align: center;">↓</div>
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                </div>
                                <div style="display: flex; gap: 20px; margin-top: 10px;">
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[5, 8]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[12, 14]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[17, 19]</div>
                                        <small>Leaf</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                    <div>[25, 30]</div>
                                </div>
                                <div style="margin-top: 10px;">
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                    <div style="display: inline-block; width: 10px; text-align: center;">↓</div>
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                </div>
                                <div style="display: flex; gap: 20px; margin-top: 10px;">
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[22, 24]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[27, 29]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[32, 35]</div>
                                        <small>Leaf</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                    <div>[45, 50]</div>
                                </div>
                                <div style="margin-top: 10px;">
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                    <div style="display: inline-block; width: 10px; text-align: center;">↓</div>
                                    <div style="display: inline-block; width: 50px; height: 2px; background: #666;"></div>
                                </div>
                                <div style="display: flex; gap: 20px; margin-top: 10px;">
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[42, 44]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[47, 49]</div>
                                        <small>Leaf</small>
                                    </div>
                                    <div style="padding: 8px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                        <div>[52, 55]</div>
                                        <small>Leaf</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h5>B-Tree Characteristics:</h5>
                <ul>
                    <li><strong>Self-balancing tree</strong> maintaining sorted data</li>
                    <li>All leaves at same level</li>
                    <li>Each node contains multiple keys and pointers</li>
                    <li>Minimum degree 't' defines range of keys (t-1 to 2t-1)</li>
                    <li>Used for range queries and equality searches</li>
                </ul>
                
                <h5>2. B+ Tree Index Structure:</h5>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 10px; border: 2px solid #2196f3;">
                    <div style="text-align: center;">
                        <!-- Root Node -->
                        <div style="display: inline-block; padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin: 10px;">
                            <div><strong>Root</strong></div>
                            <div>[15, 30]</div>
                            <small>Index entries only</small>
                        </div>
                        
                        <div style="margin: 10px;">
                            <div style="display: inline-block; width: 120px; height: 2px; background: #666;"></div>
                            <div style="display: inline-block; width: 20px; text-align: center;">↓</div>
                            <div style="display: inline-block; width: 120px; height: 2px; background: #666;"></div>
                        </div>
                        
                        <!-- Internal Nodes -->
                        <div style="display: flex; justify-content: center; gap: 40px;">
                            <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                <div><strong>Internal</strong></div>
                                <div>[5, 10]</div>
                                <small>Index entries</small>
                            </div>
                            <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                <div><strong>Internal</strong></div>
                                <div>[20, 25]</div>
                                <small>Index entries</small>
                            </div>
                            <div style="padding: 10px; border: 2px solid #4caf50; background: #e8f5e9; border-radius: 5px;">
                                <div><strong>Internal</strong></div>
                                <div>[35, 40]</div>
                                <small>Index entries</small>
                            </div>
                        </div>
                        
                        <div style="margin: 20px;">
                            <div style="display: inline-block; width: 60px; height: 2px; background: #666;"></div>
                            <div style="display: inline-block; width: 10px; text-align: center;">↓</div>
                            <div style="display: inline-block; width: 60px; height: 2px; background: #666;"></div>
                        </div>
                        
                        <!-- Leaf Nodes with Linked List -->
                        <div style="position: relative;">
                            <div style="display: flex; justify-content: center; gap: 5px;">
                                <div style="padding: 10px; border: 2px solid #9c27b0; background: #f3e5f5; border-radius: 5px;">
                                    <div><strong>Leaf</strong></div>
                                    <div>[1, 3, 4]</div>
                                    <small>Data pointers</small>
                                </div>
                                <div style="align-self: center;">→</div>
                                <div style="padding: 10px; border: 2px solid #9c27b0; background: #f3e5f5; border-radius: 5px;">
                                    <div><strong>Leaf</strong></div>
                                    <div>[5, 7, 9]</div>
                                    <small>Data pointers</small>
                                </div>
                                <div style="align-self: center;">→</div>
                                <div style="padding: 10px; border: 2px solid #9c27b0; background: #f3e5f5; border-radius: 5px;">
                                    <div><strong>Leaf</strong></div>
                                    <div>[10, 12, 14]</div>
                                    <small>Data pointers</small>
                                </div>
                                <div style="align-self: center;">→</div>
                                <div style="padding: 10px; border: 2px solid #9c27b0; background: #f3e5f5; border-radius: 5px;">
                                    <div><strong>Leaf</strong></div>
                                    <div>[15, 17, 19]</div>
                                    <small>Data pointers</small>
                                </div>
                            </div>
                            <div style="text-align: center; margin-top: 10px; font-size: 12px; color: #666;">
                                ← Linked leaf nodes for sequential access →
                            </div>
                        </div>
                    </div>
                </div>
                
                <h5>B+ Tree Advantages over B-Tree:</h5>
                <table class="comparison-table">
                    <tr>
                        <th>Feature</th>
                        <th>B-Tree</th>
                        <th>B+ Tree</th>
                    </tr>
                    <tr>
                        <td><strong>Data Storage</strong></td>
                        <td>Both internal and leaf nodes store data</td>
                        <td>Only leaf nodes store data</td>
                    </tr>
                    <tr>
                        <td><strong>Leaf Structure</strong></td>
                        <td>Not linked</td>
                        <td>Linked list for sequential access</td>
                    </tr>
                    <tr>
                        <td><strong>Height</strong></td>
                        <td>Generally taller</td>
                        <td>Shorter for same data</td>
                    </tr>
                    <tr>
                        <td><strong>Range Queries</strong></td>
                        <td>Slower</td>
                        <td>Faster (sequential scan)</td>
                    </tr>
                    <tr>
                        <td><strong>Space Usage</strong></td>
                        <td>Less efficient</td>
                        <td>More efficient</td>
                    </tr>
                    <tr>
                        <td><strong>Used in</strong></td>
                        <td>Some file systems</td>
                        <td>Most DBMS (MySQL, Oracle)</td>
                    </tr>
                </table>
                
                <h5>3. Hash Indexing:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #fff8e1; border-radius: 10px; border: 2px solid #ffb300;">
                    <div style="text-align: center;">
                        <h6 style="color: #ff9800;">Hash Function: h(key) = key mod 5</h6>
                        
                        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
                            <!-- Hash Buckets -->
                            <div>
                                <div style="padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin-bottom: 10px;">
                                    <strong>Bucket 0</strong><br>
                                    h(10)=0, h(15)=0
                                </div>
                                <div style="padding: 10px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                    <div>Key: 10 → Data</div>
                                    <div>Key: 15 → Data</div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin-bottom: 10px;">
                                    <strong>Bucket 1</strong><br>
                                    h(11)=1
                                </div>
                                <div style="padding: 10px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                    <div>Key: 11 → Data</div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin-bottom: 10px;">
                                    <strong>Bucket 2</strong><br>
                                    h(12)=2, h(17)=2
                                </div>
                                <div style="padding: 10px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                    <div>Key: 12 → Data</div>
                                    <div>Key: 17 → Data</div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin-bottom: 10px;">
                                    <strong>Bucket 3</strong><br>
                                    h(13)=3
                                </div>
                                <div style="padding: 10px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                    <div>Key: 13 → Data</div>
                                </div>
                            </div>
                            
                            <div>
                                <div style="padding: 10px; border: 2px solid #ff9800; background: #fff3e0; border-radius: 5px; margin-bottom: 10px;">
                                    <strong>Bucket 4</strong><br>
                                    h(14)=4
                                </div>
                                <div style="padding: 10px; border: 1px solid #ccc; background: white; border-radius: 3px;">
                                    <div>Key: 14 → Data</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px; font-size: 12px; color: #666;">
                            Search for key 17: h(17) = 2 → Go to Bucket 2 → O(1) access
                        </div>
                    </div>
                </div>
                
                <h5>Hash Index Characteristics:</h5>
                <ul>
                    <li><strong>O(1)</strong> average search time</li>
                    <li>Only supports equality searches (=), not range queries</li>
                    <li>Hash collisions handled by chaining or open addressing</li>
                    <li>Static hashing: Fixed number of buckets</li>
                    <li>Dynamic hashing: Extendible, linear hashing</li>
                </ul>
                
                <h5>4. Bitmap Indexing:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #e8f5e9; border-radius: 10px; border: 2px solid #4caf50;">
                    <h6 style="color: #388e3c;">Employee Table with Gender and Department:</h6>
                    
                    <table class="db-table" style="width: 60%; margin: 15px auto;">
                        <tr>
                            <th>EmpID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                        </tr>
                        <tr><td>1</td><td>Alice</td><td>F</td><td>HR</td></tr>
                        <tr><td>2</td><td>Bob</td><td>M</td><td>IT</td></tr>
                        <tr><td>3</td><td>Carol</td><td>F</td><td>IT</td></tr>
                        <tr><td>4</td><td>David</td><td>M</td><td>HR</td></tr>
                        <tr><td>5</td><td>Eve</td><td>F</td><td>Sales</td></tr>
                    </table>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <h6>Bitmap Index on Gender:</h6>
                        <div style="display: inline-block; margin: 10px; padding: 10px; border: 1px solid #4caf50; background: white; border-radius: 5px;">
                            <strong>Gender = 'M'</strong><br>
                            0 1 0 1 0
                        </div>
                        <div style="display: inline-block; margin: 10px; padding: 10px; border: 1px solid #4caf50; background: white; border-radius: 5px;">
                            <strong>Gender = 'F'</strong><br>
                            1 0 1 0 1
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <h6>Bitmap Index on Department:</h6>
                        <div style="display: inline-block; margin: 5px; padding: 8px; border: 1px solid #4caf50; background: white; border-radius: 5px;">
                            <strong>Dept = 'HR'</strong><br>
                            1 0 0 1 0
                        </div>
                        <div style="display: inline-block; margin: 5px; padding: 8px; border: 1px solid #4caf50; background: white; border-radius: 5px;">
                            <strong>Dept = 'IT'</strong><br>
                            0 1 1 0 0
                        </div>
                        <div style="display: inline-block; margin: 5px; padding: 8px; border: 1px solid #4caf50; background: white; border-radius: 5px;">
                            <strong>Dept = 'Sales'</strong><br>
                            0 0 0 0 1
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center; padding: 10px; background: #c8e6c9; border-radius: 5px;">
                        <strong>Query: Female employees in HR department</strong><br>
                        Gender='F' (1 0 1 0 1) AND Dept='HR' (1 0 0 1 0) = (1 0 0 0 0)<br>
                        Result: Employee 1 (Alice)
                    </div>
                </div>
                
                <h5>Bitmap Index Characteristics:</h5>
                <ul>
                    <li>Best for low-cardinality columns (few distinct values)</li>
                    <li>Efficient for AND/OR operations</li>
                    <li>Used in data warehousing and OLAP</li>
                    <li>Compression friendly</li>
                    <li>Fast for read queries, slow for updates</li>
                </ul>
                
                <h4>Index Types Comparison:</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Index Type</th>
                        <th>Best For</th>
                        <th>Worst For</th>
                        <th>Time Complexity</th>
                        <th>Space Overhead</th>
                    </tr>
                    <tr>
                        <td><strong>B+ Tree</strong></td>
                        <td>Range queries, general purpose</td>
                        <td>Very frequent updates</td>
                        <td>O(log n)</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td><strong>Hash Index</strong></td>
                        <td>Equality searches, exact match</td>
                        <td>Range queries, partial matches</td>
                        <td>O(1) avg</td>
                        <td>Low to Medium</td>
                    </tr>
                    <tr>
                        <td><strong>Bitmap Index</strong></td>
                        <td>Low cardinality, data warehousing</td>
                        <td>High cardinality, frequent updates</td>
                        <td>O(1) for bit operations</td>
                        <td>Low (with compression)</td>
                    </tr>
                    <tr>
                        <td><strong>Clustered Index</strong></td>
                        <td>Primary key access, range scans</td>
                        <td>Frequent updates changing key</td>
                        <td>O(log n)</td>
                        <td>None (defines order)</td>
                    </tr>
                    <tr>
                        <td><strong>Non-clustered Index</strong></td>
                        <td>Covering queries, secondary access</td>
                        <td>Non-selective queries</td>
                        <td>O(log n)</td>
                        <td>High (separate structure)</td>
                    </tr>
                </table>
                
                <h4>SQL Index Operations:</h4>
                <pre><code>-- Create different types of indexes
CREATE INDEX idx_name ON employees(name);  -- B+ Tree default
CREATE INDEX idx_hash ON employees USING HASH(id);
CREATE BITMAP INDEX idx_gender ON employees(gender);

-- Composite index
CREATE INDEX idx_name_dept ON employees(name, department);

-- Unique index
CREATE UNIQUE INDEX idx_email ON employees(email);

-- Partial index (on subset)
CREATE INDEX idx_active_users ON employees(name) WHERE active = true;

-- Functional index
CREATE INDEX idx_upper_name ON employees(UPPER(name));

-- Check index usage
EXPLAIN ANALYZE SELECT * FROM employees WHERE name = 'John';

-- Rebuild index (defragmentation)
ALTER INDEX idx_name REBUILD;

-- Disable/Enable index
ALTER INDEX idx_name DISABLE;
ALTER INDEX idx_name REBUILD;</code></pre>
                
                <h4>Index Design Guidelines:</h4>
                <ol>
                    <li><strong>When to Index:</strong>
                        <ul>
                            <li>Primary keys automatically indexed</li>
                            <li>Foreign keys often benefit from indexes</li>
                            <li>Columns frequently used in WHERE, JOIN, ORDER BY</li>
                            <li>Columns with high selectivity</li>
                        </ul>
                    </li>
                    <li><strong>When NOT to Index:</strong>
                        <ul>
                            <li>Tables with frequent bulk inserts</li>
                            <li>Small tables (less than few hundred rows)</li>
                            <li>Columns frequently updated</li>
                            <li>Low cardinality columns (unless bitmap)</li>
                        </ul>
                    </li>
                    <li><strong>Composite Index Order:</strong>
                        <ul>
                            <li>Most selective column first</li>
                            <li>Consider query patterns</li>
                            <li>Covering indexes (include all needed columns)</li>
                        </ul>
                    </li>
                </ol>
                
                <h4>Index Maintenance and Statistics:</h4>
                <pre><code>-- Update statistics for query optimizer
ANALYZE employees;

-- Check index fragmentation
SELECT 
    indexname,
    tablename,
    pg_size_pretty(pg_relation_size(indexname::regclass)) as size,
    idx_scan as scans
FROM pg_stat_user_indexes
WHERE tablename = 'employees';

-- Reindex table
REINDEX TABLE employees;

-- Monitor index usage
SELECT 
    schemaname,
    tablename,
    indexname,
    idx_scan as index_scans,
    idx_tup_read as tuples_read,
    idx_tup_fetch as tuples_fetched
FROM pg_stat_user_indexes
ORDER BY idx_scan;</code></pre>
                
                <h4>Indexing in Different Databases:</h4>
                <ul>
                    <li><strong>MySQL/InnoDB:</strong> Uses B+ Tree, clustered index on primary key</li>
                    <li><strong>PostgreSQL:</strong> B+ Tree, Hash, GiST, SP-GiST, GIN, BRIN indexes</li>
                    <li><strong>Oracle:</strong> B+ Tree, Bitmap, Function-based, Domain indexes</li>
                    <li><strong>SQL Server:</strong> Clustered, Non-clustered, Columnstore, Full-text</li>
                    <li><strong>MongoDB:</strong> B+ Tree for all indexes, supports compound, multikey, geospatial</li>
                </ul>
            </div>`
        },
        {
            number: 7,
            question: "Explain distributed databases: architecture, fragmentation, replication, CAP theorem, and consistency models",
            definition: "Distributed database is a collection of multiple logically interrelated databases distributed over a computer network",
            answer: `<div class="answer-content">
                <h4>Distributed Database System (DDBS):</h4>
                <p>A distributed database system consists of multiple, logically interrelated databases distributed over a computer network. Data is physically stored across different sites but appears as a single database to users.</p>
                
                <h4>Architecture of Distributed Databases:</h4>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white;">
                    <div style="text-align: center;">
                        <h5 style="color: white;">Distributed Database Architecture</h5>
                        
                        <!-- Global Schema Level -->
                        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
                            <strong>Global Schema Level</strong><br>
                            <small>Unified view of entire distributed database</small>
                        </div>
                        
                        <!-- Fragmentation & Allocation Level -->
                        <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
                            <div style="background: rgba(255,255,255,0.15); padding: 10px; border-radius: 5px; flex: 1;">
                                <strong>Fragmentation Schema</strong><br>
                                <small>How data is divided</small>
                            </div>
                            <div style="background: rgba(255,255,255,0.15); padding: 10px; border-radius: 5px; flex: 1;">
                                <strong>Allocation Schema</strong><br>
                                <small>Where fragments are stored</small>
                            </div>
                        </div>
                        
                        <!-- Local Schema Level -->
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin: 10px 0;">
                            <strong>Local Schema Level</strong><br>
                            <small>Individual site schemas</small>
                        </div>
                        
                        <!-- Sites -->
                        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
                            <div style="background: white; color: #333; padding: 15px; border-radius: 5px; text-align: center; min-width: 120px;">
                                <div style="color: #2196f3;">Site 1</div>
                                <div style="font-size: 12px;">Database Fragment A</div>
                                <div style="font-size: 12px;">Database Fragment C</div>
                            </div>
                            
                            <div style="background: white; color: #333; padding: 15px; border-radius: 5px; text-align: center; min-width: 120px;">
                                <div style="color: #4caf50;">Site 2</div>
                                <div style="font-size: 12px;">Database Fragment B</div>
                                <div style="font-size: 12px;">Database Fragment A (Replica)</div>
                            </div>
                            
                            <div style="background: white; color: #333; padding: 15px; border-radius: 5px; text-align: center; min-width: 120px;">
                                <div style="color: #ff9800;">Site 3</div>
                                <div style="font-size: 12px;">Database Fragment C</div>
                                <div style="font-size: 12px;">Database Fragment B (Replica)</div>
                            </div>
                        </div>
                        
                        <!-- Network -->
                        <div style="margin-top: 15px; font-size: 12px;">
                            ← Connected via Network (LAN/WAN) →
                        </div>
                    </div>
                </div>
                
                <h4>Types of Distributed Databases:</h4>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Homogeneous DDBS</h5>
                        <ul>
                            <li>Same DBMS at all sites</li>
                            <li>Same data model</li>
                            <li>Same schema</li>
                            <li>Easier to manage</li>
                            <li><strong>Example:</strong> Oracle RAC</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Heterogeneous DDBS</h5>
                        <ul>
                            <li>Different DBMS at different sites</li>
                            <li>Different data models</li>
                            <li>Different schemas</li>
                            <li>Requires gateways/mediators</li>
                            <li><strong>Example:</strong> Federated databases</li>
                        </ul>
                    </div>
                </div>
                
                <h4>Data Fragmentation Techniques:</h4>
                
                <h5>1. Horizontal Fragmentation:</h5>
                <div style="margin: 15px 0; padding: 15px; background: #e8f5e9; border-radius: 5px;">
                    <p>Rows are distributed based on selection conditions.</p>
                    
                    <table class="db-table" style="width: 80%; margin: 10px auto;">
                        <tr>
                            <th>Original Employee Table</th>
                        </tr>
                        <tr>
                            <td>
                                <strong>EmpID</strong> | Name | Dept | Location<br>
                                101 | Alice | HR | NY<br>
                                102 | Bob | IT | CA<br>
                                103 | Carol | HR | CA<br>
                                104 | David | IT | NY<br>
                                105 | Eve | Sales | TX
                            </td>
                        </tr>
                    </table>
                    
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px;">
                        <div style="padding: 10px; border: 2px solid #4caf50; border-radius: 5px; background: white;">
                            <strong>Fragment F1: Location='NY'</strong><br>
                            101 | Alice | HR | NY<br>
                            104 | David | IT | NY
                        </div>
                        
                        <div style="padding: 10px; border: 2px solid #4caf50; border-radius: 5px; background: white;">
                            <strong>Fragment F2: Location='CA'</strong><br>
                            102 | Bob | IT | CA<br>
                            103 | Carol | HR | CA
                        </div>
                        
                        <div style="padding: 10px; border: 2px solid #4caf50; border-radius: 5px; background: white;">
                            <strong>Fragment F3: Location='TX'</strong><br>
                            105 | Eve | Sales | TX
                        </div>
                    </div>
                </div>
                
                <h5>2. Vertical Fragmentation:</h5>
                <div style="margin: 15px 0; padding: 15px; background: #e3f2fd; border-radius: 5px;">
                    <p>Columns are distributed based on attributes used together.</p>
                    
                    <table class="db-table" style="width: 80%; margin: 10px auto;">
                        <tr>
                            <th>Original Employee Table</th>
                        </tr>
                        <tr>
                            <td>
                                <strong>EmpID</strong> | Name | Salary | Dept | Email | Phone<br>
                                101 | Alice | 50000 | HR | a@x.com | 123<br>
                                102 | Bob | 60000 | IT | b@x.com | 456
                            </td>
                        </tr>
                    </table>
                    
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px;">
                        <div style="padding: 10px; border: 2px solid #2196f3; border-radius: 5px; background: white;">
                            <strong>Fragment F1: Employee Info</strong><br>
                            EmpID | Name | Dept<br>
                            101 | Alice | HR<br>
                            102 | Bob | IT
                        </div>
                        
                        <div style="padding: 10px; border: 2px solid #2196f3; border-radius: 5px; background: white;">
                            <strong>Fragment F2: Contact Info</strong><br>
                            EmpID | Email | Phone<br>
                            101 | a@x.com | 123<br>
                            102 | b@x.com | 456
                        </div>
                        
                        <div style="padding: 10px; border: 2px solid #2196f3; border-radius: 5px; background: white;">
                            <strong>Fragment F3: Salary Info</strong><br>
                            EmpID | Salary<br>
                            101 | 50000<br>
                            102 | 60000
                        </div>
                    </div>
                </div>
                
                <h5>3. Mixed/Hybrid Fragmentation:</h5>
                <div style="margin: 15px 0; padding: 15px; background: #fff3e0; border-radius: 5px;">
                    <p>Combination of horizontal and vertical fragmentation.</p>
                    <pre><code>Example:
1. First vertically fragment into: 
   F1(EmpID, Name, Dept) and F2(EmpID, Salary, Email)
2. Then horizontally fragment F1 by:
   F11: Dept='HR', F12: Dept='IT'
3. Result: F11, F12, F2</code></pre>
                </div>
                
                <h4>Data Replication:</h4>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #388e3c;">Full Replication</h5>
                        <ul>
                            <li>Complete database at every site</li>
                            <li><strong>Advantage:</strong> High availability, fast local reads</li>
                            <li><strong>Disadvantage:</strong> High storage, update overhead</li>
                            <li><strong>Update Strategy:</strong> Synchronous replication</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Partial Replication</h5>
                        <ul>
                            <li>Selected fragments replicated</li>
                            <li>Balance between performance and overhead</li>
                            <li>Based on access frequency</li>
                            <li><strong>Example:</strong> Critical data replicated, non-critical not</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #f3e5f5; border-radius: 10px;">
                        <h5 style="color: #7b1fa2;">No Replication</h5>
                        <ul>
                            <li>Each fragment at exactly one site</li>
                            <li><strong>Advantage:</strong> No consistency issues</li>
                            <li><strong>Disadvantage:</strong> Single point of failure</li>
                            <li>Used with horizontal fragmentation</li>
                        </ul>
                    </div>
                </div>
                
                <h4>CAP Theorem (Brewer's Theorem):</h4>
                <div style="text-align: center; margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%); border-radius: 10px;">
                    <h5 style="color: #d32f2f;">CAP Theorem Triangle</h5>
                    <div style="position: relative; height: 200px; margin: 20px auto; width: 300px;">
                        <!-- Triangle -->
                        <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            <div style="padding: 10px; background: #ff5252; color: white; border-radius: 5px;">
                                <strong>C</strong><br>Consistency
                            </div>
                        </div>
                        <div style="position: absolute; bottom: 0; left: 0;">
                            <div style="padding: 10px; background: #2196f3; color: white; border-radius: 5px;">
                                <strong>A</strong><br>Availability
                            </div>
                        </div>
                        <div style="position: absolute; bottom: 0; right: 0;">
                            <div style="padding: 10px; background: #4caf50; color: white; border-radius: 5px;">
                                <strong>P</strong><br>Partition Tolerance
                            </div>
                        </div>
                        
                        <!-- Lines -->
                        <div style="position: absolute; top: 40px; left: 150px; width: 2px; height: 120px; background: #666; transform: rotate(60deg);"></div>
                        <div style="position: absolute; top: 40px; left: 150px; width: 2px; height: 120px; background: #666; transform: rotate(-60deg);"></div>
                        <div style="position: absolute; bottom: 40px; left: 50px; width: 200px; height: 2px; background: #666;"></div>
                        
                        <!-- You can only pick two -->
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,255,255,0.9); padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                            <strong>Pick Any Two</strong>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
                        <div style="padding: 10px; background: white; border-radius: 5px; min-width: 150px;">
                            <strong>CP Systems</strong><br>
                            MongoDB<br>Redis<br>HBase
                        </div>
                        <div style="padding: 10px; background: white; border-radius: 5px; min-width: 150px;">
                            <strong>AP Systems</strong><br>
                            Cassandra<br>CouchDB<br>DynamoDB
                        </div>
                        <div style="padding: 10px; background: white; border-radius: 5px; min-width: 150px;">
                            <strong>CA Systems</strong><br>
                            RDBMS<br>MySQL Cluster<br>Traditional SQL
                        </div>
                    </div>
                </div>
                
                <h5>CAP Components:</h5>
                <ul>
                    <li><strong>Consistency (C):</strong> Every read receives most recent write or error</li>
                    <li><strong>Availability (A):</strong> Every request receives response (non-error)</li>
                    <li><strong>Partition Tolerance (P):</strong> System continues despite network partitions</li>
                </ul>
                
                <h4>Consistency Models:</h4>
                
                <h5>1. Strong Consistency:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                    <p>All nodes see same data at same time. After update completes, all subsequent reads return updated value.</p>
                    <pre><code>Write: X = 5 on Node A
Propagation to all replicas
Read from any node: X = 5</code></pre>
                    <p><strong>Use Case:</strong> Banking systems, inventory management</p>
                </div>
                
                <h5>2. Eventual Consistency:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #fff3e0; border-radius: 5px;">
                    <p>If no new updates, eventually all accesses return last updated value.</p>
                    <pre><code>Write: X = 5 on Node A
Read from Node B (not synced): X = 4 (old value)
Eventually Node B syncs: X = 5</code></pre>
                    <p><strong>Use Case:</strong> Social media, DNS, caching systems</p>
                </div>
                
                <h5>3. Causal Consistency:</h5>
                <div style="margin: 15px 0; padding: 10px; background: #e3f2fd; border-radius: 5px;">
                    <p>Preserves cause-effect relationships. If event A causally affects event B, all nodes see A before B.</p>
                    <pre><code>User A: Post comment (Event A)
User B: Reply to comment (Event B)
All users see comment before reply</code></pre>
                </div>
                
                <h4>Distributed Transaction Management:</h4>
                
                <h5>Two-Phase Commit Protocol (2PC):</h5>
                <div style="margin: 15px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                    <div style="text-align: center;">
                        <div style="display: inline-block; padding: 10px; margin: 5px; background: #2196f3; color: white; border-radius: 5px;">
                            <strong>Coordinator</strong>
                        </div>
                        <div style="display: inline-block; margin: 0 10px;">↔</div>
                        <div style="display: inline-block; padding: 10px; margin: 5px; background: #4caf50; color: white; border-radius: 5px;">
                            <strong>Participants</strong><br>
                            Site 1, Site 2, Site 3
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px;">
                        <strong>Phase 1: Voting Phase</strong>
                        <ol>
                            <li>Coordinator sends PREPARE message to all participants</li>
                            <li>Participants perform operations, write to log</li>
                            <li>Participants respond READY or ABORT</li>
                        </ol>
                        
                        <strong>Phase 2: Decision Phase</strong>
                        <ol>
                            <li>If all READY: Coordinator sends COMMIT</li>
                            <li>If any ABORT: Coordinator sends ROLLBACK</li>
                            <li>Participants acknowledge completion</li>
                        </ol>
                    </div>
                </div>
                
                <h5>Three-Phase Commit Protocol (3PC):</h5>
                <ul>
                    <li>Adds pre-commit phase to handle coordinator failures</li>
                    <li>Non-blocking protocol</li>
                    <li>More resilient but more messages</li>
                </ul>
                
                <h4>Distributed Query Processing:</h4>
                <pre><code>-- Distributed query
SELECT e.name, d.dept_name
FROM employee@site1 e
JOIN department@site2 d ON e.dept_id = d.dept_id
WHERE e.salary > 50000;

-- Query processing steps:
1. Query decomposition (global to fragments)
2. Data localization (fragments to sites)
3. Global optimization (choose best strategy)
4. Local optimization (at each site)
5. Execution and result assembly</code></pre>
                
                <h4>Distributed Database Design Considerations:</h4>
                <ol>
                    <li><strong>Transparency:</strong>
                        <ul>
                            <li><strong>Location:</strong> Users unaware of data location</li>
                            <li><strong>Replication:</strong> Users unaware of replication</li>
                            <li><strong>Fragmentation:</strong> Users see unified view</li>
                            <li><strong>Concurrency:</strong> Multiple users can access simultaneously</li>
                            <li><strong>Failure:</strong> System continues despite failures</li>
                        </ul>
                    </li>
                    <li><strong>Distribution Design Goals:</strong>
                        <ul>
                            <li>Minimize communication costs</li>
                            <li>Maximize local processing</li>
                            <li>Balance storage across sites</li>
                            <li>Consider site autonomy requirements</li>
                        </ul>
                    </li>
                    <li><strong>Trade-offs:</strong>
                        <ul>
                            <li>Replication vs. Consistency</li>
                            <li>Centralized vs. Distributed control</li>
                            <li>Homogeneous vs. Heterogeneous systems</li>
                            <li>Synchronous vs. Asynchronous replication</li>
                        </ul>
                    </li>
                </ol>
                
                <h4>Real-World Distributed Databases:</h4>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="margin: 10px; padding: 15px; background: #ffebee; border-radius: 5px; min-width: 200px;">
                        <strong>Cassandra</strong><br>
                        AP system, column-family store<br>
                        Eventual consistency, tunable
                    </div>
                    <div style="margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 5px; min-width: 200px;">
                        <strong>MongoDB</strong><br>
                        CP system, document store<br>
                        Strong consistency by default
                    </div>
                    <div style="margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 5px; min-width: 200px;">
                        <strong>Google Spanner</strong><br>
                        CA system, global scale<br>
                        Strong consistency, TrueTime API
                    </div>
                    <div style="margin: 10px; padding: 15px; background: #fff3e0; border-radius: 5px; min-width: 200px;">
                        <strong>Amazon DynamoDB</strong><br>
                        AP system, key-value store<br>
                        Eventual/strong consistency options
                    </div>
                </div>
            </div>`
        },
        {
            number: 8,
            question: "Explain NoSQL databases: types, characteristics, MongoDB architecture, Cassandra data model, and use cases",
            definition: "NoSQL databases provide non-relational, distributed data storage for large-scale applications",
            answer: `<div class="answer-content">
                <h4>NoSQL Databases Overview:</h4>
                <p>NoSQL (Not Only SQL) databases are non-relational databases designed for large-scale data storage and distributed data processing. They provide flexible schemas, horizontal scalability, and are optimized for specific data models.</p>
                
                <h4>Why NoSQL? (Comparison with RDBMS):</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Aspect</th>
                        <th>RDBMS</th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td><strong>Data Model</strong></td>
                        <td>Tabular, relations</td>
                        <td>Document, key-value, column-family, graph</td>
                    </tr>
                    <tr>
                        <td><strong>Schema</strong></td>
                        <td>Fixed, predefined</td>
                        <td>Dynamic, flexible</td>
                    </tr>
                    <tr>
                        <td><strong>Scaling</strong></td>
                        <td>Vertical (scale-up)</td>
                        <td>Horizontal (scale-out)</td>
                    </tr>
                    <tr>
                        <td><strong>ACID Compliance</strong></td>
                        <td>Full ACID</td>
                        <td>BASE (Basically Available, Soft state, Eventual consistency)</td>
                    </tr>
                    <tr>
                        <td><strong>Transactions</strong></td>
                        <td>Complex transactions</td>
                        <td>Simple transactions</td>
                    </tr>
                    <tr>
                        <td><strong>Joins</strong></td>
                        <td>Supported</td>
                        <td>Not supported (denormalized)</td>
                    </tr>
                    <tr>
                        <td><strong>Best For</strong></td>
                        <td>Complex queries, transactions</td>
                        <td>Large-scale, unstructured data</td>
                    </tr>
                </table>
                
                <h4>NoSQL Database Types:</h4>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px; border: 2px solid #2196f3;">
                        <h5 style="color: #2196f3;">Document Databases</h5>
                        <p><strong>Examples:</strong> MongoDB, CouchDB</p>
                        <p><strong>Data Model:</strong> JSON/BSON documents</p>
                        <pre style="background: white; color: #333;">{
  "_id": "101",
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main",
    "city": "NY"
  }
}</pre>
                        <p><strong>Use Cases:</strong> Content management, catalogs</p>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px; border: 2px solid #4caf50;">
                        <h5 style="color: #4caf50;">Key-Value Stores</h5>
                        <p><strong>Examples:</strong> Redis, DynamoDB</p>
                        <p><strong>Data Model:</strong> Simple key-value pairs</p>
                        <div style="background: white; padding: 10px; border-radius: 5px;">
                            <strong>Key:</strong> "user:101"<br>
                            <strong>Value:</strong> {"name":"John","age":30}
                        </div>
                        <p><strong>Use Cases:</strong> Caching, session storage</p>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px; border: 2px solid #ff9800;">
                        <h5 style="color: #ff9800;">Column-Family Stores</h5>
                        <p><strong>Examples:</strong> Cassandra, HBase</p>
                        <p><strong>Data Model:</strong> Tables with rows and columns families</p>
                        <div style="background: white; padding: 10px; border-radius: 5px;">
                            <strong>Row Key:</strong> "user101"<br>
                            <strong>Column Family:</strong> "personal"<br>
                            <strong>Columns:</strong> name, age, email
                        </div>
                        <p><strong>Use Cases:</strong> Time-series, analytics</p>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #f3e5f5; border-radius: 10px; border: 2px solid #9c27b0;">
                        <h5 style="color: #9c27b0;">Graph Databases</h5>
                        <p><strong>Examples:</strong> Neo4j, Amazon Neptune</p>
                        <p><strong>Data Model:</strong> Nodes and edges</p>
                        <div style="background: white; padding: 10px; border-radius: 5px; text-align: center;">
                            (Person) -[FRIEND_OF]-> (Person)<br>
                            (User) -[PURCHASED]-> (Product)
                        </div>
                        <p><strong>Use Cases:</strong> Social networks, recommendation engines</p>
                    </div>
                </div>
                
                <h4>MongoDB Architecture:</h4>
                <div style="margin: 20px 0; padding: 20px; background: #f5f5f5; border-radius: 10px; border: 2px solid #13aa52;">
                    <div style="text-align: center;">
                        <h5 style="color: #13aa52;">MongoDB Architecture Components</h5>
                        
                        <!-- Application Layer -->
                        <div style="padding: 10px; background: #2196f3; color: white; border-radius: 5px; margin: 10px; display: inline-block;">
                            <strong>Application</strong>
                        </div>
                        
                        <div style="margin: 10px;">↓ <small>Driver Connection</small> ↓</div>
                        
                        <!-- MongoDB Instance -->
                        <div style="padding: 15px; background: white; border-radius: 8px; border: 2px solid #13aa52;">
                            <strong>MongoDB Instance</strong>
                            
                            <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px;">
                                <div style="padding: 10px; background: #e3f2fd; border-radius: 5px; min-width: 120px;">
                                    <strong>mongod</strong><br>
                                    <small>Primary daemon</small>
                                </div>
                                <div style="padding: 10px; background: #fff3e0; border-radius: 5px; min-width: 120px;">
                                    <strong>Storage Engine</strong><br>
                                    <small>WiredTiger</small>
                                </div>
                                <div style="padding: 10px; background: #e8f5e9; border-radius: 5px; min-width: 120px;">
                                    <strong>Query Processor</strong><br>
                                    <small>Indexes, aggregation</small>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin: 15px;">↓ <small>Data Storage</small> ↓</div>
                        
                        <!-- Storage -->
                        <div style="padding: 10px; background: #666; color: white; border-radius: 5px; margin: 10px; display: inline-block;">
                            <strong>Storage Layer</strong><br>
                            Journal, Data Files, Index Files
                        </div>
                    </div>
                </div>
                
                <h5>MongoDB Replica Set Architecture:</h5>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white;">
                    <div style="text-align: center;">
                        <div style="display: flex; justify-content: center; align-items: center; gap: 30px;">
                            <!-- Primary -->
                            <div style="padding: 15px; background: #4caf50; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                                <strong>Primary</strong>
                                <small>Read/Write</small>
                            </div>
                            
                            <!-- Arrow -->
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <div>← Replication →</div>
                                <div>↓ Election ↑</div>
                            </div>
                            
                            <!-- Secondaries -->
                            <div>
                                <div style="padding: 10px; background: #2196f3; border-radius: 5px; margin: 5px; min-width: 100px;">
                                    <strong>Secondary 1</strong><br>
                                    <small>Read-only</small>
                                </div>
                                <div style="padding: 10px; background: #2196f3; border-radius: 5px; margin: 5px; min-width: 100px;">
                                    <strong>Secondary 2</strong><br>
                                    <small>Read-only</small>
                                </div>
                                <div style="padding: 10px; background: #ff9800; border-radius: 5px; margin: 5px; min-width: 100px;">
                                    <strong>Arbiter</strong><br>
                                    <small>Vote only</small>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px; font-size: 14px;">
                            <strong>Automatic Failover:</strong> If primary fails, election chooses new primary
                        </div>
                    </div>
                </div>
                
                <h5>MongoDB Sharding Architecture:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #fff3e0; border-radius: 10px; border: 2px solid #ff9800;">
                    <div style="text-align: center;">
                        <!-- Application -->
                        <div style="padding: 10px; background: #2196f3; color: white; border-radius: 5px; display: inline-block;">
                            <strong>Application</strong>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- Mongos Router -->
                        <div style="padding: 15px; background: #4caf50; color: white; border-radius: 5px; display: inline-block; margin: 0 20px;">
                            <strong>mongos</strong><br>
                            <small>Query Router</small>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- Config Servers -->
                        <div style="padding: 10px; background: #9c27b0; color: white; border-radius: 5px; display: inline-block; margin: 0 10px;">
                            Config Servers<br>
                            <small>Metadata</small>
                        </div>
                        
                        <div style="margin: 20px;"></div>
                        
                        <!-- Shards -->
                        <div style="display: flex; justify-content: center; gap: 20px;">
                            <div style="text-align: center;">
                                <div style="padding: 10px; background: #ff5722; color: white; border-radius: 5px;">
                                    <strong>Shard 1</strong><br>
                                    <small>Replica Set</small>
                                </div>
                                <div style="font-size: 12px;">Data: A-M</div>
                            </div>
                            
                            <div style="text-align: center;">
                                <div style="padding: 10px; background: #ff5722; color: white; border-radius: 5px;">
                                    <strong>Shard 2</strong><br>
                                    <small>Replica Set</small>
                                </div>
                                <div style="font-size: 12px;">Data: N-Z</div>
                            </div>
                            
                            <div style="text-align: center;">
                                <div style="padding: 10px; background: #ff5722; color: white; border-radius: 5px;">
                                    <strong>Shard 3</strong><br>
                                    <small>Replica Set</small>
                                </div>
                                <div style="font-size: 12px;">Data: 0-9</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h4>Cassandra Data Model and Architecture:</h4>
                
                <h5>Cassandra Ring Architecture:</h5>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; color: white; text-align: center;">
                    <div style="position: relative; height: 300px; width: 300px; margin: 0 auto;">
                        <!-- Ring -->
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 280px; height: 280px; border: 3px solid white; border-radius: 50%;"></div>
                        
                        <!-- Nodes on Ring -->
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 240px; height: 240px;">
                            <!-- Node 1 -->
                            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                                <div style="padding: 8px; background: #2196f3; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N1<br>
                                    <small style="font-size: 8px;">0-100</small>
                                </div>
                            </div>
                            
                            <!-- Node 2 -->
                            <div style="position: absolute; top: 25%; right: 10%;">
                                <div style="padding: 8px; background: #4caf50; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N2<br>
                                    <small style="font-size: 8px;">101-200</small>
                                </div>
                            </div>
                            
                            <!-- Node 3 -->
                            <div style="position: absolute; bottom: 25%; right: 10%;">
                                <div style="padding: 8px; background: #ff9800; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N3<br>
                                    <small style="font-size: 8px;">201-300</small>
                                </div>
                            </div>
                            
                            <!-- Node 4 -->
                            <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);">
                                <div style="padding: 8px; background: #9c27b0; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N4<br>
                                    <small style="font-size: 8px;">301-400</small>
                                </div>
                            </div>
                            
                            <!-- Node 5 -->
                            <div style="position: absolute; bottom: 25%; left: 10%;">
                                <div style="padding: 8px; background: #f44336; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N5<br>
                                    <small style="font-size: 8px;">401-500</small>
                                </div>
                            </div>
                            
                            <!-- Node 6 -->
                            <div style="position: absolute; top: 25%; left: 10%;">
                                <div style="padding: 8px; background: #00bcd4; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                                    N6<br>
                                    <small style="font-size: 8px;">501-600</small>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Center Text -->
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; text-align: center;">
                            <strong>Consistent Hashing</strong><br>
                            <small>Token Range Distribution</small>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <strong>Partitioner:</strong> Murmur3Partitioner<br>
                        <strong>Replication Factor:</strong> 3<br>
                        <strong>Data Distribution:</strong> By partition key hash
                    </div>
                </div>
                
                <h5>Cassandra Data Model - Column Family:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #e8f5e9; border-radius: 10px;">
                    <pre><code>CREATE KEYSPACE ecommerce 
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

CREATE TABLE products (
  product_id UUID PRIMARY KEY,
  name TEXT,
  category TEXT,
  price DECIMAL,
  attributes MAP&lt;TEXT, TEXT&gt;,
  created_at TIMESTAMP
);

CREATE TABLE orders (
  order_id UUID,
  user_id UUID,
  order_date DATE,
  status TEXT,
  items LIST&lt;FROZEN&lt;order_item&gt;&gt;,
  PRIMARY KEY (user_id, order_date, order_id)
) WITH CLUSTERING ORDER BY (order_date DESC);</code></pre>
                    
                    <div style="margin-top: 20px;">
                        <strong>Wide Row Example:</strong>
                        <div style="padding: 10px; background: white; border-radius: 5px; margin-top: 10px;">
                            <strong>Row Key:</strong> User_101<br>
                            <strong>Columns:</strong><br>
                            order:2023-01-01 → {order details}<br>
                            order:2023-01-02 → {order details}<br>
                            order:2023-01-03 → {order details}<br>
                            ...<br>
                            <small>All orders for user in single row</small>
                        </div>
                    </div>
                </div>
                
                <h4>NoSQL Query Examples:</h4>
                
                <h5>MongoDB Query:</h5>
                <pre><code>// MongoDB JavaScript Shell
// Insert document
db.users.insertOne({
  _id: 101,
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA"
  },
  tags: ["customer", "premium"]
});

// Find documents
db.users.find({ age: { $gt: 25 } });

// Aggregation pipeline
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
      _id: "$customer_id",
      total: { $sum: "$amount" }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);

// Create index
db.users.createIndex({ email: 1 }, { unique: true });

// Text search
db.products.createIndex({ description: "text" });
db.products.find({ $text: { $search: "laptop gaming" } });</code></pre>
                
                <h5>Cassandra CQL:</h5>
                <pre><code>-- Cassandra Query Language (CQL)
-- Insert data
INSERT INTO users (user_id, name, email, created_at)
VALUES (uuid(), 'John Doe', 'john@example.com', toTimestamp(now()));

-- Batch operation
BEGIN BATCH
  INSERT INTO orders (order_id, user_id, total) VALUES (uuid(), 101, 100);
  UPDATE user_stats SET order_count = order_count + 1 WHERE user_id = 101;
APPLY BATCH;

-- Materialized View
CREATE MATERIALIZED VIEW user_orders_by_date AS
SELECT * FROM orders
WHERE user_id IS NOT NULL AND order_date IS NOT NULL AND order_id IS NOT NULL
PRIMARY KEY (user_id, order_date, order_id);

-- Secondary Index (use sparingly)
CREATE INDEX ON users (email);</code></pre>
                
                <h4>NoSQL Design Patterns:</h4>
                <ol>
                    <li><strong>Denormalization:</strong> Store related data together to avoid joins</li>
                    <li><strong>Aggregate Pattern:</strong> Group related data in single document/row</li>
                    <li><strong>Computed Pattern:</strong> Store pre-computed values</li>
                    <li><strong>Bucket Pattern:</strong> Group data into buckets (time-series)</li>
                    <li><strong>Schema Versioning:</strong> Include version field in documents</li>
                    <li><strong>Polyglot Persistence:</strong> Use multiple databases for different needs</li>
                </ol>
                
                <h4>When to Use NoSQL:</h4>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="margin: 10px; padding: 15px; background: #c8e6c9; border-radius: 5px; min-width: 200px;">
                        <strong>✅ Use NoSQL When:</strong>
                        <ul>
                            <li>Large volumes of data</li>
                            <li>Rapid development</li>
                            <li>Flexible schema needed</li>
                            <li>Horizontal scaling required</li>
                            <li>High write throughput</li>
                        </ul>
                    </div>
                    
                    <div style="margin: 10px; padding: 15px; background: #ffcdd2; border-radius: 5px; min-width: 200px;">
                        <strong>❌ Avoid NoSQL When:</strong>
                        <ul>
                            <li>Complex transactions</li>
                            <li>Complex joins needed</li>
                            <li>Strong consistency required</li>
                            <li>Mature tooling needed</li>
                            <li>Small dataset</li>
                        </ul>
                    </div>
                </div>
                
                <h4>NoSQL Performance Considerations:</h4>
                <ul>
                    <li><strong>Write Optimization:</strong> NoSQL optimized for writes (append, LSM trees)</li>
                    <li><strong>Read Optimization:</strong> Denormalization, materialized views</li>
                    <li><strong>Consistency Tuning:</strong> Tunable consistency levels</li>
                    <li><strong>Compaction:</strong> Merge SSTables in LSM trees</li>
                    <li><strong>Bloom Filters:</strong> Reduce disk seeks for non-existent keys</li>
                </ul>
                
                <h4>Emerging Trends:</h4>
                <ul>
                    <li><strong>NewSQL:</strong> Combines NoSQL scalability with SQL ACID (Spanner, CockroachDB)</li>
                    <li><strong>Multi-model Databases:</strong> Support multiple data models (ArangoDB, Cosmos DB)</li>
                    <li><strong>Serverless Databases:</strong> Auto-scaling, pay-per-use (DynamoDB, FaunaDB)</li>
                    <li><strong>Time-Series Databases:</strong> Optimized for time-stamped data (InfluxDB, TimescaleDB)</li>
                </ul>
            </div>`
        },
        {
            number: 9,
            question: "Explain database security: authentication, authorization, encryption, SQL injection, auditing, and compliance",
            definition: "Database security involves protecting databases from unauthorized access, attacks, and data breaches",
            answer: `<div class="answer-content">
                <h4>Database Security Overview:</h4>
                <p>Database security encompasses all measures taken to protect databases from intentional or accidental threats. It includes protecting the data, the database management system, and associated applications.</p>
                
                <h4>Security Architecture Layers:</h4>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #434343 0%, #000000 100%); color: white; border-radius: 10px;">
                    <div style="text-align: center;">
                        <!-- External Security -->
                        <div style="padding: 15px; background: #f44336; border-radius: 5px; margin: 10px;">
                            <strong>External Security</strong><br>
                            <small>Network, Firewall, VPN</small>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- DBMS Security -->
                        <div style="padding: 15px; background: #ff9800; border-radius: 5px; margin: 10px;">
                            <strong>DBMS Security</strong><br>
                            <small>Authentication, Authorization</small>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- Database Security -->
                        <div style="padding: 15px; background: #4caf50; border-radius: 5px; margin: 10px;">
                            <strong>Database Security</strong><br>
                            <small>Access Control, Encryption</small>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- Data Security -->
                        <div style="padding: 15px; background: #2196f3; border-radius: 5px; margin: 10px;">
                            <strong>Data Security</strong><br>
                            <small>Data Encryption, Masking</small>
                        </div>
                        
                        <div style="margin: 10px;">↓</div>
                        
                        <!-- Application Security -->
                        <div style="padding: 15px; background: #9c27b0; border-radius: 5px; margin: 10px;">
                            <strong>Application Security</strong><br>
                            <small>Input Validation, SQL Injection</small>
                        </div>
                    </div>
                </div>
                
                <h4>1. Authentication:</h4>
                <p>Verifying the identity of users or systems attempting to access the database.</p>
                
                <h5>Authentication Methods:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Password-Based</h5>
                        <ul>
                            <li>Username/password</li>
                            <li>Password policies</li>
                            <li>Password hashing (bcrypt, scrypt)</li>
                            <li>Password complexity rules</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #4caf50;">Multi-Factor (MFA)</h5>
                        <ul>
                            <li>Something you know (password)</li>
                            <li>Something you have (token, phone)</li>
                            <li>Something you are (biometric)</li>
                            <li>TOTP, SMS codes</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Integrated</h5>
                        <ul>
                            <li>Windows Authentication</li>
                            <li>LDAP/Active Directory</li>
                            <li>Kerberos</li>
                            <li>Single Sign-On (SSO)</li>
                        </ul>
                    </div>
                </div>
                
                <h5>Database Authentication Configuration:</h5>
                <pre><code>-- PostgreSQL Authentication (pg_hba.conf)
# TYPE  DATABASE  USER  ADDRESS  METHOD
host    all       all   10.0.0.0/8  md5
host    all       all   192.168.0.0/16 scram-sha-256
host    all       all   ::1/128      peer

-- MySQL Authentication
CREATE USER 'app_user'@'localhost' 
IDENTIFIED WITH mysql_native_password 
BY 'StrongPassword123!';

-- Oracle Authentication
CREATE USER secure_user IDENTIFIED BY password;
ALTER PROFILE default LIMIT 
  FAILED_LOGIN_ATTEMPTS 3 
  PASSWORD_LOCK_TIME 1;</code></pre>
                
                <h4>2. Authorization and Access Control:</h4>
                <p>Determining what authenticated users are allowed to do.</p>
                
                <h5>Access Control Models:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #2196f3;">
                            <h5 style="color: #2196f3;">Discretionary Access Control (DAC)</h5>
                            <ul>
                                <li>Owner controls access</li>
                                <li>GRANT/REVOKE model</li>
                                <li>Used in most RDBMS</li>
                                <li>Flexible but less secure</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #4caf50;">
                            <h5 style="color: #4caf50;">Mandatory Access Control (MAC)</h5>
                            <ul>
                                <li>System-wide policies</li>
                                <li>Multi-level security</li>
                                <li>Used in military/government</li>
                                <li>Labels: Top Secret, Secret, etc.</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #ff9800;">
                            <h5 style="color: #ff9800;">Role-Based Access Control (RBAC)</h5>
                            <ul>
                                <li>Permissions assigned to roles</li>
                                <li>Users assigned roles</li>
                                <li>Standard in enterprise systems</li>
                                <li>Principle of least privilege</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h5>RBAC Implementation Example:</h5>
                <pre><code>-- Create roles
CREATE ROLE read_only;
CREATE ROLE data_analyst;
CREATE ROLE dba_admin;

-- Grant privileges to roles
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;
GRANT SELECT, INSERT, UPDATE ON sales.* TO data_analyst;
GRANT ALL PRIVILEGES ON *.* TO dba_admin WITH GRANT OPTION;

-- Create users and assign roles
CREATE USER 'report_user' IDENTIFIED BY 'password';
GRANT read_only TO 'report_user';

CREATE USER 'analyst1' IDENTIFIED BY 'password';
GRANT data_analyst TO 'analyst1';

-- Role activation
SET ROLE read_only;
SET ROLE NONE; -- Revert to default</code></pre>
                
                <h5>Row-Level Security (RLS):</h5>
                <pre><code>-- PostgreSQL Row-Level Security
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    department TEXT,
    salary DECIMAL,
    manager_id INTEGER
);

-- Enable RLS
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY employee_policy ON employees
    FOR ALL
    USING (manager_id = current_user_id());

CREATE POLICY hr_policy ON employees
    FOR SELECT
    TO hr_role
    USING (true);  -- HR can see all rows

-- SQL Server RLS
CREATE SECURITY POLICY DepartmentFilter
ADD FILTER PREDICATE dbo.fn_securitypredicate(DepartmentID)
ON dbo.SalesData
WITH (STATE = ON);</code></pre>
                
                <h4>3. Encryption:</h4>
                
                <h5>Encryption Types:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Encryption at Rest</h5>
                        <ul>
                            <li>Transparent Data Encryption (TDE)</li>
                            <li>File system encryption</li>
                            <li>Column-level encryption</li>
                            <li>Key management systems</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #4caf50;">Encryption in Transit</h5>
                        <ul>
                            <li>TLS/SSL connections</li>
                            <li>Database connection encryption</li>
                            <li>Certificate management</li>
                            <li>Perfect Forward Secrecy</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Application-Level</h5>
                        <ul>
                            <li>Client-side encryption</li>
                            <li>Field-level encryption</li>
                            <li>Homomorphic encryption</li>
                            <li>Format-preserving encryption</li>
                        </ul>
                    </div>
                </div>
                
                <h5>Encryption Implementation:</h5>
                <pre><code>-- Transparent Data Encryption (TDE)
-- SQL Server
CREATE DATABASE ENCRYPTION KEY
WITH ALGORITHM = AES_256
ENCRYPTION BY SERVER CERTIFICATE MyServerCert;

ALTER DATABASE MyDatabase
SET ENCRYPTION ON;

-- Column-level encryption
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'StrongPassword!';

CREATE CERTIFICATE MyCertificate
WITH SUBJECT = 'Column Encryption';

CREATE SYMMETRIC KEY SSN_Key
WITH ALGORITHM = AES_256
ENCRYPTION BY CERTIFICATE MyCertificate;

-- Encrypt data
OPEN SYMMETRIC KEY SSN_Key DECRYPTION BY CERTIFICATE MyCertificate;
UPDATE Customers 
SET SSN_Encrypted = EncryptByKey(Key_GUID('SSN_Key'), SSN);

-- MySQL TDE
INSTALL COMPONENT "file://component_encryption";
SET GLOBAL innodb_default_encryption_key_id = 1;
ALTER TABLE sensitive_data ENCRYPTION = 'Y';</code></pre>
                
                <h4>4. SQL Injection Protection:</h4>
                
                <h5>SQL Injection Example:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #ffebee; border-radius: 10px; border: 2px solid #f44336;">
                    <h5 style="color: #d32f2f;">Vulnerable Code:</h5>
                    <pre><code>// Vulnerable PHP code
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM users 
          WHERE username = '$username' 
          AND password = '$password'";
$result = mysqli_query($connection, $query);

// Attacker input:
// username: admin'--
// password: anything
// Resulting query:
// SELECT * FROM users WHERE username = 'admin'--' AND password = 'anything'
// Comment (--) removes password check</code></pre>
                    
                    <div style="margin-top: 15px;">
                        <h5 style="color: #388e3c;">Attack Types:</h5>
                        <ul>
                            <li><strong>Classic:</strong> ' OR '1'='1</li>
                            <li><strong>Union-based:</strong> ' UNION SELECT * FROM users--</li>
                            <li><strong>Error-based:</strong> ' AND 1=CONVERT(int, (SELECT @@version))--</li>
                            <li><strong>Blind:</strong> ' AND SLEEP(5)--</li>
                            <li><strong>Second-order:</strong> Stored procedure injection</li>
                        </ul>
                    </div>
                </div>
                
                <h5>Prevention Techniques:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #388e3c;">Prepared Statements</h5>
                        <pre><code>// Parameterized queries
$stmt = $pdo->prepare(
    "SELECT * FROM users 
     WHERE username = ? AND password = ?"
);
$stmt->execute([$username, $password]);</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Stored Procedures</h5>
                        <pre><code>CREATE PROCEDURE ValidateUser(
    IN p_username VARCHAR(50),
    IN p_password VARCHAR(50)
)
BEGIN
    SELECT * FROM users 
    WHERE username = p_username 
    AND password = p_password;
END;</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Input Validation</h5>
                        <pre><code>// Whitelist validation
if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
    die("Invalid username");
}

// Type checking
$user_id = (int)$_GET['id'];
$email = filter_var($input, FILTER_VALIDATE_EMAIL);</code></pre>
                    </div>
                </div>
                
                <h5>Web Application Firewall (WAF) Rules:</h5>
                <pre><code># ModSecurity rules for SQL injection
SecRule ARGS "['\";]"
SecRule ARGS "(union.*select|select.*union)"
SecRule ARGS "(sleep\(|benchmark\()"
SecRule ARGS "(drop.*table|truncate.*table)"

# OWASP Core Rule Set
SecRule REQUEST_COOKIES|REQUEST_COOKIES_NAMES|REQUEST_FILENAME|ARGS_NAMES|ARGS|XML:/* 
"[\"';]" \
"phase:2,rev:'2.2.9',capture,t:none,t:urlDecodeUni,t:htmlEntityDecode,t:lowercase,
block,msg:'SQL Injection Attack',id:'959071',tag:'OWASP_CRS/WEB_ATTACK/SQL_INJECTION',
tag:'WASCTC/WASC-19',tag:'OWASP_TOP_10/A1',tag:'PCI/6.5.2',
logdata:'%{TX.0}',severity:'2'"</code></pre>
                
                <h4>5. Database Auditing:</h4>
                
                <h5>Audit Types:</h5>
                <div style="margin: 20px 0;">
                    <table class="comparison-table">
                        <tr>
                            <th>Audit Type</th>
                            <th>What's Logged</th>
                            <th>Purpose</th>
                        </tr>
                        <tr>
                            <td><strong>Access Auditing</strong></td>
                            <td>Who accessed what, when</td>
                            <td>Unauthorized access detection</td>
                        </tr>
                        <tr>
                            <td><strong>Privilege Auditing</strong></td>
                            <td>Privilege usage, role changes</td>
                            <td>Privilege abuse detection</td>
                        </tr>
                        <tr>
                            <td><strong>Data Auditing</strong></td>
                            <td>Data modifications (INSERT/UPDATE/DELETE)</td>
                            <td>Data integrity, compliance</td>
                        </tr>
                        <tr>
                            <td><strong>Security Auditing</strong></td>
                            <td>Security-related events</td>
                            <td>Security policy enforcement</td>
                        </tr>
                        <tr>
                            <td><strong>Performance Auditing</strong></td>
                            <td>Query performance, resource usage</td>
                            <td>Performance optimization</td>
                        </tr>
                    </table>
                </div>
                
                <h5>Database Audit Implementation:</h5>
                <pre><code>-- Oracle Audit Configuration
AUDIT SELECT TABLE, UPDATE TABLE, DELETE TABLE BY ACCESS;
AUDIT EXECUTE ANY PROCEDURE;
AUDIT ALL BY scott BY SESSION WHENEVER NOT SUCCESSFUL;

-- View audit logs
SELECT username, action_name, obj_name, timestamp
FROM dba_audit_trail
WHERE timestamp > SYSDATE - 1;

-- SQL Server Audit
CREATE SERVER AUDIT ServerAudit
TO FILE (FILEPATH = 'C:\Audits\', MAXSIZE = 1 GB)
WITH (QUEUE_DELAY = 1000, ON_FAILURE = CONTINUE);

CREATE SERVER AUDIT SPECIFICATION ServerAuditSpec
FOR SERVER AUDIT ServerAudit
ADD (FAILED_LOGIN_GROUP),
ADD (SUCCESSFUL_LOGIN_GROUP),
ADD (DATABASE_PERMISSION_CHANGE_GROUP);

-- Enable audit
ALTER SERVER AUDIT ServerAudit WITH (STATE = ON);

-- PostgreSQL Audit Extension
CREATE EXTENSION pgaudit;
ALTER DATABASE mydb SET pgaudit.log = 'READ, WRITE';
SET pgaudit.log = 'ALL';</code></pre>
                
                <h4>6. Data Masking and Anonymization:</h4>
                
                <h5>Data Masking Techniques:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #388e3c;">Static Masking</h5>
                        <ul>
                            <li>Permanent transformation</li>
                            <li>For non-production environments</li>
                            <li>Irreversible</li>
                            <li>Example: John → User1</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Dynamic Masking</h5>
                        <ul>
                            <li>Real-time transformation</li>
                            <li>Based on user role</li>
                            <li>Original data preserved</li>
                            <li>Example: Show XXX-XX-1234 for SSN</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Tokenization</h5>
                        <ul>
                            <li>Replace with tokens</li>
                            <li>Mapping stored securely</li>
                            <li>Reversible with authorization</li>
                            <li>Used for PCI DSS compliance</li>
                        </ul>
                    </div>
                </div>
                
                <pre><code>-- Dynamic Data Masking (SQL Server)
CREATE TABLE CustomerData (
    CustomerID INT PRIMARY KEY,
    Email VARCHAR(100) MASKED WITH (FUNCTION = 'email()'),
    Phone VARCHAR(20) MASKED WITH (FUNCTION = 'partial(2, "XXX-XX", 2)'),
    SSN VARCHAR(11) MASKED WITH (FUNCTION = 'partial(0, "XXX-XX-", 4)'),
    CreditCard VARCHAR(19) MASKED WITH (FUNCTION = 'partial(0, "XXXX-XXXX-XXXX-", 4)')
);

-- Grant unmask permission
GRANT UNMASK TO AuditUser;

-- Oracle Data Redaction
BEGIN
    DBMS_REDACT.ADD_POLICY(
        object_schema => 'HR',
        object_name => 'EMPLOYEES',
        column_name => 'SALARY',
        policy_name => 'redact_salary',
        function_type => DBMS_REDACT.PARTIAL,
        function_parameters => '9,1,12'
    );
END;</code></pre>
                
                <h4>7. Compliance and Regulations:</h4>
                
                <div style="margin: 20px 0;">
                    <table class="comparison-table">
                        <tr>
                            <th>Regulation</th>
                            <th>Scope</th>
                            <th>Database Requirements</th>
                        </tr>
                        <tr>
                            <td><strong>GDPR</strong></td>
                            <td>EU personal data</td>
                            <td>Data protection by design, right to erasure, consent management</td>
                        </tr>
                        <tr>
                            <td><strong>HIPAA</strong></td>
                            <td>US healthcare data</td>
                            <td>Encryption, access controls, audit trails</td>
                        </tr>
                        <tr>
                            <td><strong>PCI DSS</strong></td>
                            <td>Payment card data</td>
                            <td>Encryption, masking, network security</td>
                        </tr>
                        <tr>
                            <td><strong>SOX</strong></td>
                            <td>Financial reporting</td>
                            <td>Access controls, change management, auditing</td>
                        </tr>
                        <tr>
                            <td><strong>FERPA</strong></td>
                            <td>Educational records</td>
                            <td>Privacy protection, access controls</td>
                        </tr>
                    </table>
                </div>
                
                <h4>8. Backup Security:</h4>
                <ul>
                    <li><strong>Encrypted Backups:</strong> Protect backup files with encryption</li>
                    <li><strong>Secure Storage:</strong> Offsite backups with access controls</li>
                    <li><strong>Backup Integrity:</strong> Checksums and verification</li>
                    <li><strong>Retention Policies:</strong> Define backup retention periods</li>
                    <li><strong>Disaster Recovery:</strong> Regular DR testing</li>
                </ul>
                
                <pre><code>-- Encrypted backup example
BACKUP DATABASE MyDatabase
TO DISK = 'D:\Backups\MyDatabase.bak'
WITH 
    ENCRYPTION (
        ALGORITHM = AES_256,
        SERVER CERTIFICATE = BackupCert
    ),
    COMPRESSION,
    CHECKSUM;

-- Backup verification
RESTORE VERIFYONLY 
FROM DISK = 'D:\Backups\MyDatabase.bak'
WITH CHECKSUM;</code></pre>
                
                <h4>Security Best Practices:</h4>
                <ol>
                    <li><strong>Principle of Least Privilege:</strong> Grant minimum necessary permissions</li>
                    <li><strong>Regular Updates:</strong> Apply security patches promptly</li>
                    <li><strong>Network Segmentation:</strong> Isolate database servers</li>
                    <li><strong>Strong Authentication:</strong> Enforce MFA for privileged accounts</li>
                    <li><strong>Regular Audits:</strong> Review logs and access patterns</li>
                    <li><strong>Employee Training:</strong> Security awareness programs</li>
                    <li><strong>Incident Response Plan:</strong> Preparedness for security incidents</li>
                    <li><strong>Third-party Assessment:</strong> Regular security audits</li>
                </ol>
            </div>`
        },
        {
            number: 10,
            question: "Explain database optimization techniques: query optimization, indexing strategies, partitioning, caching, and performance monitoring",
            definition: "Database optimization involves techniques to improve database performance, scalability, and efficiency",
            answer: `<div class="answer-content">
                <h4>Database Performance Optimization Overview:</h4>
                <p>Database optimization is a continuous process of improving database performance through various techniques including query optimization, indexing, partitioning, caching, and hardware optimization.</p>
                
                <h4>Performance Bottleneck Areas:</h4>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; border-radius: 10px;">
                    <div style="text-align: center;">
                        <h5 style="color: white;">Database Performance Pyramid</h5>
                        
                        <div style="display: flex; flex-direction: column; align-items: center; margin: 20px 0;">
                            <!-- Level 1: Hardware -->
                            <div style="width: 300px; padding: 15px; background: #f44336; border-radius: 5px; margin: 5px;">
                                <strong>Hardware & Infrastructure</strong><br>
                                <small>CPU, Memory, Disk, Network</small>
                            </div>
                            
                            <!-- Level 2: Database Design -->
                            <div style="width: 250px; padding: 15px; background: #ff9800; border-radius: 5px; margin: 5px;">
                                <strong>Database Design</strong><br>
                                <small>Schema, Normalization, Data Types</small>
                            </div>
                            
                            <!-- Level 3: Query & Index -->
                            <div style="width: 200px; padding: 15px; background: #4caf50; border-radius: 5px; margin: 5px;">
                                <strong>Query & Index Optimization</strong><br>
                                <small>SQL Tuning, Indexing Strategy</small>
                            </div>
                            
                            <!-- Level 4: Configuration -->
                            <div style="width: 150px; padding: 15px; background: #2196f3; border-radius: 5px; margin: 5px;">
                                <strong>Configuration</strong><br>
                                <small>Settings, Parameters, Memory</small>
                            </div>
                            
                            <!-- Level 5: Monitoring -->
                            <div style="width: 100px; padding: 15px; background: #9c27b0; border-radius: 5px; margin: 5px;">
                                <strong>Monitoring</strong><br>
                                <small>Metrics, Alerts, Analysis</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h4>1. Query Optimization:</h4>
                
                <h5>Query Execution Plan Analysis:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #f5f5f5; border-radius: 10px;">
                    <pre><code>-- MySQL EXPLAIN
EXPLAIN SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE o.order_date > '2023-01-01'
AND c.country = 'USA'
ORDER BY o.order_date DESC
LIMIT 100;

-- PostgreSQL EXPLAIN ANALYZE
EXPLAIN ANALYZE
SELECT p.product_name, SUM(oi.quantity) as total_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
WHERE oi.order_date BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY p.product_id
HAVING SUM(oi.quantity) > 100
ORDER BY total_sold DESC;

-- SQL Server Execution Plan
SET STATISTICS PROFILE ON;
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

SELECT * FROM LargeTable WHERE Status = 'Active';</code></pre>
                    
                    <div style="margin-top: 20px;">
                        <h5>Execution Plan Components:</h5>
                        <table class="comparison-table">
                            <tr>
                                <th>Component</th>
                                <th>What to Look For</th>
                                <th>Performance Impact</th>
                            </tr>
                            <tr>
                                <td><strong>Full Table Scan</strong></td>
                                <td>Sequential scan of entire table</td>
                                <td>High I/O, slow for large tables</td>
                            </tr>
                            <tr>
                                <td><strong>Index Scan</strong></td>
                                <td>Scanning entire index</td>
                                <td>Better than table scan</td>
                            </tr>
                            <tr>
                                <td><strong>Index Seek</strong></td>
                                <td>Direct lookup using index</td>
                                <td>Optimal for selective queries</td>
                            </tr>
                            <tr>
                                <td><strong>Hash Join</strong></td>
                                <td>Building hash table in memory</td>
                                <td>Good for large, unsorted data</td>
                            </tr>
                            <tr>
                                <td><strong>Merge Join</strong></td>
                                <td>Merging two sorted inputs</td>
                                <td>Good for sorted data</td>
                            </tr>
                            <tr>
                                <td><strong>Nested Loop</strong></td>
                                <td>Looping through outer and inner</td>
                                <td>Good for small datasets</td>
                            </tr>
                            <tr>
                                <td><strong>Sort Operation</strong></td>
                                <td>Sorting data in memory/disk</td>
                                <td>Memory intensive, can be slow</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <h5>Query Optimization Techniques:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #388e3c;">SELECT Optimization</h5>
                        <pre><code>-- ❌ Bad: SELECT *
SELECT * FROM employees;

-- ✅ Good: Select only needed columns
SELECT employee_id, first_name, last_name 
FROM employees;

-- ❌ Bad: Functions on indexed columns
SELECT * FROM orders 
WHERE YEAR(order_date) = 2023;

-- ✅ Good: Range query on index
SELECT * FROM orders 
WHERE order_date >= '2023-01-01' 
AND order_date < '2024-01-01';</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">JOIN Optimization</h5>
                        <pre><code>-- ❌ Bad: Cartesian product
SELECT * FROM table1, table2;

-- ✅ Good: Explicit JOIN with conditions
SELECT * FROM table1 
JOIN table2 ON table1.id = table2.table1_id;

-- ❌ Bad: Multiple OR conditions
SELECT * FROM products 
WHERE category = 'Electronics' 
OR category = 'Books' 
OR category = 'Clothing';

-- ✅ Good: IN clause
SELECT * FROM products 
WHERE category IN ('Electronics', 'Books', 'Clothing');</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Subquery Optimization</h5>
                        <pre><code>-- ❌ Bad: Correlated subquery
SELECT name, 
       (SELECT COUNT(*) FROM orders 
        WHERE orders.customer_id = customers.id) 
FROM customers;

-- ✅ Good: JOIN with aggregation
SELECT c.name, COUNT(o.order_id)
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;

-- ❌ Bad: NOT IN with NULLs
SELECT * FROM table1 
WHERE id NOT IN (SELECT id FROM table2);

-- ✅ Good: NOT EXISTS or LEFT JOIN
SELECT * FROM table1 t1
WHERE NOT EXISTS (
    SELECT 1 FROM table2 t2 
    WHERE t2.id = t1.id
);</code></pre>
                    </div>
                </div>
                
                <h4>2. Advanced Indexing Strategies:</h4>
                
                <h5>Index Selection Guidelines:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #fffde7; border-radius: 10px; border: 2px solid #ffeb3b;">
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #ddd;">
                            <h5 style="color: #2196f3;">Candidate Columns</h5>
                            <ul>
                                <li>Primary keys</li>
                                <li>Foreign keys</li>
                                <li>WHERE clause columns</li>
                                <li>JOIN condition columns</li>
                                <li>ORDER BY columns</li>
                                <li>Columns with high selectivity</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #ddd;">
                            <h5 style="color: #4caf50;">Avoid Indexing</h5>
                            <ul>
                                <li>Small tables (< 1000 rows)</li>
                                <li>Frequently updated columns</li>
                                <li>Low cardinality columns</li>
                                <li>Columns with NULL values</li>
                                <li>BLOB/TEXT columns (use prefix)</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #ddd;">
                            <h5 style="color: #ff9800;">Index Types by Use Case</h5>
                            <ul>
                                <li>Equality lookups: B-Tree</li>
                                <li>Range queries: B+ Tree</li>
                                <li>Full-text search: Full-text index</li>
                                <li>Geospatial: R-Tree/GiST</li>
                                <li>Boolean queries: Bitmap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h5>Advanced Index Techniques:</h5>
                <pre><code>-- Composite Index with proper order
-- Query: WHERE status = 'active' AND created_at > '2023-01-01'
-- Good: (status, created_at) - both columns used
-- Bad: (created_at, status) - only first column used

CREATE INDEX idx_status_created ON orders(status, created_at);

-- Covering Index (includes all needed columns)
CREATE INDEX idx_covering ON employees 
(department_id, hire_date)
INCLUDE (first_name, last_name, salary);

-- Filtered/Partial Index (index subset of rows)
CREATE INDEX idx_active_users ON users(email)
WHERE active = true;

-- Functional Index (index on expression)
CREATE INDEX idx_lower_email ON users(LOWER(email));

-- Hash Index for equality searches
CREATE INDEX idx_hash ON sessions(session_id) USING HASH;

-- Multi-column GIN Index for arrays
CREATE INDEX idx_tags ON products USING GIN(tags);</code></pre>
                
                <h5>Index Maintenance:</h5>
                <pre><code>-- Check index usage statistics
-- PostgreSQL
SELECT 
    schemaname,
    tablename,
    indexname,
    idx_scan as index_scans,
    idx_tup_read as tuples_read,
    idx_tup_fetch as tuples_fetched,
    pg_size_pretty(pg_relation_size(indexname::regclass)) as index_size
FROM pg_stat_user_indexes
ORDER BY idx_scan;

-- Identify unused indexes
SELECT 
    schemaname,
    tablename,
    indexname,
    pg_size_pretty(pg_relation_size(indexname::regclass)) as size
FROM pg_stat_user_indexes
WHERE idx_scan = 0
AND pg_relation_size(indexname::regclass) > 1024*1024;  -- > 1MB

-- Rebuild fragmented indexes
-- SQL Server
ALTER INDEX ALL ON TableName REBUILD;
ALTER INDEX IX_IndexName ON TableName REORGANIZE;

-- PostgreSQL
REINDEX INDEX index_name;
REINDEX TABLE table_name;
REINDEX DATABASE database_name;

-- MySQL
ANALYZE TABLE table_name;
OPTIMIZE TABLE table_name;</code></pre>
                
                <h4>3. Database Partitioning:</h4>
                
                <h5>Partitioning Strategies:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">Range Partitioning</h5>
                        <pre><code>CREATE TABLE orders (
    order_id INT,
    order_date DATE,
    customer_id INT,
    amount DECIMAL(10,2)
) PARTITION BY RANGE (YEAR(order_date)) (
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN (2022),
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION pfuture VALUES LESS THAN MAXVALUE
);</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #4caf50;">List Partitioning</h5>
                        <pre><code>CREATE TABLE customers (
    customer_id INT,
    name VARCHAR(100),
    country VARCHAR(50)
) PARTITION BY LIST (country) (
    PARTITION p_usa VALUES IN ('USA', 'Canada'),
    PARTITION p_europe VALUES IN ('UK', 'Germany', 'France'),
    PARTITION p_asia VALUES IN ('Japan', 'China', 'India'),
    PARTITION p_other VALUES IN (DEFAULT)
);</code></pre>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Hash Partitioning</h5>
                        <pre><code>CREATE TABLE sessions (
    session_id VARCHAR(100),
    user_id INT,
    created_at TIMESTAMP,
    data TEXT
) PARTITION BY HASH (user_id)
PARTITIONS 4;  -- Distributes across 4 partitions</code></pre>
                    </div>
                </div>
                
                <h5>Partition Management:</h5>
                <pre><code>-- Add new partition
ALTER TABLE orders ADD PARTITION (
    PARTITION p2024 VALUES LESS THAN (2025)
);

-- Drop old partition
ALTER TABLE orders DROP PARTITION p2020;

-- Merge partitions
ALTER TABLE orders REORGANIZE PARTITION p2020, p2021 INTO (
    PARTITION p2020_2021 VALUES LESS THAN (2022)
);

-- Exchange partition (fast data load)
ALTER TABLE orders EXCHANGE PARTITION p2023 
WITH TABLE orders_staging;

-- Partition pruning example
EXPLAIN SELECT * FROM orders 
WHERE order_date >= '2023-01-01' 
AND order_date < '2023-02-01';
-- Only scans p2023 partition</code></pre>
                
                <h4>4. Caching Strategies:</h4>
                
                <h5>Cache Levels:</h5>
                <div style="margin: 20px 0; padding: 20px; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #2196f3;">
                            <h5 style="color: #2196f3;">Database Buffer Cache</h5>
                            <ul>
                                <li>In-memory data pages</li>
                                <li>Reduces disk I/O</li>
                                <li>Tuned with buffer pool size</li>
                                <li>LRU replacement policy</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #4caf50;">
                            <h5 style="color: #4caf50;">Query Result Cache</h5>
                            <ul>
                                <li>Caches complete query results</li>
                                <li>For repeated identical queries</li>
                                <li>Invalidated on data change</li>
                                <li>MySQL query cache (deprecated)</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; margin: 10px; padding: 15px; background: white; border-radius: 5px; border: 2px solid #ff9800;">
                            <h5 style="color: #ff9800;">Application Cache</h5>
                            <ul>
                                <li>Redis, Memcached</li>
                                <li>Application-level caching</li>
                                <li>Cache-aside pattern</li>
                                <li>Read-through/write-through</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <h5>Redis Cache Implementation:</h5>
                <pre><code>// Cache-aside pattern
public Product GetProduct(int productId) {
    // Try cache first
    string cacheKey = $"product:{productId}";
    var product = cache.Get<Product>(cacheKey);
    
    if (product == null) {
        // Cache miss - get from database
        product = db.Products.Find(productId);
        if (product != null) {
            // Store in cache with expiration
            cache.Set(cacheKey, product, TimeSpan.FromMinutes(30));
        }
    }
    return product;
}

// Write-through pattern
public void UpdateProduct(Product product) {
    // Update database
    db.Products.Update(product);
    db.SaveChanges();
    
    // Update cache
    string cacheKey = $"product:{product.Id}";
    cache.Set(cacheKey, product, TimeSpan.FromMinutes(30));
}

// Cache invalidation on delete
public void DeleteProduct(int productId) {
    db.Products.Delete(productId);
    db.SaveChanges();
    
    // Remove from cache
    string cacheKey = $"product:{productId}";
    cache.Remove(cacheKey);
}</code></pre>
                
                <h5>Database Buffer Cache Tuning:</h5>
                <pre><code>-- MySQL InnoDB Buffer Pool
SET GLOBAL innodb_buffer_pool_size = 8589934592;  -- 8GB
SET GLOBAL innodb_buffer_pool_instances = 8;

-- Monitor buffer pool usage
SHOW ENGINE INNODB STATUS\G
SELECT * FROM sys.metrics 
WHERE variable_name LIKE '%buffer_pool%';

-- PostgreSQL shared_buffers
ALTER SYSTEM SET shared_buffers = '4GB';
SELECT pg_reload_conf();

-- Check cache hit ratio
SELECT 
    sum(heap_blks_read) as heap_read,
    sum(heap_blks_hit) as heap_hit,
    sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) as ratio
FROM pg_statio_user_tables;</code></pre>
                
                <h4>5. Hardware and Configuration Optimization:</h4>
                
                <h5>Storage Optimization:</h5>
                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e8f5e9; border-radius: 10px;">
                        <h5 style="color: #388e3c;">Storage Types</h5>
                        <ul>
                            <li><strong>SSD:</strong> Fast random access</li>
                            <li><strong>NVMe:</strong> Ultra-fast IOPS</li>
                            <li><strong>HDD:</strong> High capacity, cheap</li>
                            <li><strong>RAID 10:</strong> Performance + redundancy</li>
                            <li><strong>RAID 5:</strong> Balance + redundancy</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #fff3e0; border-radius: 10px;">
                        <h5 style="color: #ff9800;">Memory Configuration</h5>
                        <ul>
                            <li>Buffer pool size (70-80% RAM)</li>
                            <li>Query cache (if used)</li>
                            <li>Connection pool memory</li>
                            <li>Sort buffer size</li>
                            <li>Join buffer size</li>
                        </ul>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px; margin: 10px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                        <h5 style="color: #2196f3;">I/O Optimization</h5>
                        <ul>
                            <li>Separate data and log files</li>
                            <li>Temporary tablespaces</li>
                            <li>Tablespace striping</li>
                            <li>File placement strategy</li>
                            <li>I/O scheduler tuning</li>
                        </ul>
                    </div>
                </div>
                
                <h5>Important Configuration Parameters:</h5>
                <pre><code>-- MySQL Configuration (my.cnf)
[mysqld]
# Memory settings
innodb_buffer_pool_size = 16G
innodb_buffer_pool_instances = 8
key_buffer_size = 256M
query_cache_size = 0  # Deprecated in MySQL 8.0

# I/O settings
innodb_flush_log_at_trx_commit = 2  # For performance
innodb_flush_method = O_DIRECT
innodb_log_file_size = 2G
innodb_log_buffer_size = 64M

# Connection settings
max_connections = 200
thread_cache_size = 10
table_open_cache = 2000

-- PostgreSQL (postgresql.conf)
shared_buffers = 4GB
work_mem = 64MB
maintenance_work_mem = 1GB
effective_cache_size = 12GB
synchronous_commit = off  # For async replication
wal_buffers = 16MB
checkpoint_timeout = 15min
max_connections = 200</code></pre>
                
                <h4>6. Performance Monitoring and Tuning:</h4>
                
                <h5>Key Performance Metrics:</h5>
                <div style="margin: 20px 0;">
                    <table class="comparison-table">
                        <tr>
                            <th>Metric Category</th>
                            <th>Specific Metrics</th>
                            <th>Target Values</th>
                        </tr>
                        <tr>
                            <td><strong>CPU Utilization</strong></td>
                            <td>% CPU usage, load average</td>
                            <td>< 70% sustained, < 5 load</td>
                        </tr>
                        <tr>
                            <td><strong>Memory Usage</strong></td>
                            <td>Buffer hit ratio, swap usage</td>
                            <td>> 95% hit ratio, 0 swap</td>
                        </tr>
                        <tr>
                            <td><strong>Disk I/O</strong></td>
                            <td>IOPS, throughput, latency</td>
                            <td>Latency < 10ms, queue length < 2</td>
                        </tr>
                        <tr>
                            <td><strong>Query Performance</strong></td>
                            <td>Slow queries, execution time</td>
                            <td>< 100ms for OLTP, < 1s for OLAP</td>
                        </tr>
                        <tr>
                            <td><strong>Connection Pool</strong></td>
                            <td>Active connections, wait events</td>
                            <td>Connection usage < 80%</td>
                        </tr>
                        <tr>
                            <td><strong>Lock Contention</strong></td>
                            <td>Lock waits, deadlocks</td>
                            <td>Minimal lock waits, 0 deadlocks</td>
                        </tr>
                    </table>
                </div>
                
                <h5>Monitoring Tools and Queries:</h5>
                <pre><code>-- Find slow queries
-- MySQL
SELECT * FROM mysql.slow_log 
ORDER BY start_time DESC 
LIMIT 10;

-- PostgreSQL
SELECT * FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Identify table/index bloat
SELECT 
    schemaname, tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as total_size,
    pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) as table_size,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - 
                   pg_relation_size(schemaname||'.'||tablename)) as index_size
FROM pg_tables
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC
LIMIT 20;

-- Monitor locks
-- MySQL
SHOW ENGINE INNODB STATUS\G
SELECT * FROM information_schema.INNODB_LOCKS;
SELECT * FROM information_schema.INNODB_LOCK_WAITS;

-- PostgreSQL
SELECT 
    pid, 
    usename, 
    application_name,
    query, 
    wait_event_type,
    wait_event,
    state
FROM pg_stat_activity
WHERE state = 'active';</code></pre>
                
                <h5>Performance Tuning Process:</h5>
                <ol>
                    <li><strong>Baseline Establishment:</strong> Measure current performance</li>
                    <li><strong>Bottleneck Identification:</strong> Find slowest component</li>
                    <li><strong>Hypothesis Formation:</strong> Propose solution</li>
                    <li><strong>Change Implementation:</strong> Apply one change at a time</li>
                    <li><strong>Measurement and Validation:</strong> Measure impact</li>
                    <li><strong>Documentation:</strong> Record changes and results</li>
                </ol>
                
                <h4>7. Advanced Techniques:</h4>
                
                <h5>Materialized Views:</h5>
                <pre><code>-- Create materialized view
CREATE MATERIALIZED VIEW sales_summary AS
SELECT 
    product_id,
    DATE_TRUNC('month', order_date) as month,
    SUM(quantity) as total_quantity,
    SUM(amount) as total_amount,
    COUNT(*) as order_count
FROM orders
GROUP BY product_id, DATE_TRUNC('month', order_date);

-- Create index on materialized view
CREATE UNIQUE INDEX idx_sales_summary 
ON sales_summary (product_id, month);

-- Refresh materialized view
REFRESH MATERIALIZED VIEW CONCURRENTLY sales_summary;

-- Automatic refresh with triggers
CREATE OR REPLACE FUNCTION refresh_sales_summary()
RETURNS TRIGGER AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY sales_summary;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER refresh_sales_trigger
AFTER INSERT OR UPDATE OR DELETE ON orders
FOR EACH STATEMENT
EXECUTE FUNCTION refresh_sales_summary();</code></pre>
                
                <h5>Connection Pooling:</h5>
                <pre><code>-- Using PgBouncer (PostgreSQL)
[databases]
mydb = host=127.0.0.1 port=5432 dbname=mydb

[pgbouncer]
listen_port = 6432
listen_addr = *
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20
reserve_pool_size = 5

-- MySQL Connection Pool with ProxySQL
INSERT INTO mysql_servers (hostgroup_id, hostname, port) 
VALUES (0, '127.0.0.1', 3306);

INSERT INTO mysql_users (username, password, default_hostgroup) 
VALUES ('app_user', 'password', 0);

LOAD MYSQL SERVERS TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;</code></pre>
                
                <h4>Best Practices Summary:</h4>
                <ol>
                    <li><strong>Design First:</strong> Proper schema design is foundation</li>
                    <li><strong>Measure Before Optimizing:</strong> Use profiling tools</li>
                    <li><strong>Index Strategically:</strong> Not too many, not too few</li>
                    <li><strong>Batch Operations:</strong> Minimize round trips</li>
                    <li><strong>Use Connection Pooling:</strong> Reduce connection overhead</li>
                    <li><strong>Monitor Continuously:</strong> Set up alerts for issues</li>
                    <li><strong>Regular Maintenance:</strong> Update statistics, rebuild indexes</li>
                    <li><strong>Test Changes:</strong> Always test in staging first</li>
                    <li><strong>Document Everything:</strong> Keep records of changes</li>
                    <li><strong>Think Horizontally:</strong> Plan for scaling from start</li>
                </ol>
            </div>`
        }
    ]
},

    cplusplus: {
    title: "C++ Programming",
    icon: "<i class='fas fa-copyright'></i>",
    questions: [
        {
            number: 1,
            question: "What is C++ programming language and what are its key features?",
            definition: "C++ is a general-purpose, compiled, object-oriented programming language that is an extension of C",
            answer: `<div class="answer-content">
                <h4>Definition:</h4>
                <p>C++ is a statically typed, compiled, general-purpose programming language that supports both procedural and object-oriented programming paradigms. It was developed by Bjarne Stroustrup at Bell Labs in 1985 as an extension of the C programming language.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li><strong>Object-Oriented:</strong> Supports encapsulation, inheritance, polymorphism, and abstraction</li>
                    <li><strong>Platform Dependent:</strong> Compiled code is platform-specific</li>
                    <li><strong>Mid-level Language:</strong> Combines both high-level and low-level features</li>
                    <li><strong>Rich Library Support:</strong> Standard Template Library (STL) provides extensive functionality</li>
                    <li><strong>Memory Management:</strong> Supports both static and dynamic memory allocation</li>
                    <li><strong>Multiple Inheritance:</strong> Allows a class to inherit from multiple base classes</li>
                    <li><strong>Operator Overloading:</strong> Allows redefinition of operators for user-defined types</li>
                    <li><strong>Exception Handling:</strong> try-catch-throw mechanism for error handling</li>
                </ul>
                
                <h4>Comparison with C:</h4>
                <p>C++ maintains backward compatibility with C but adds object-oriented features. C is procedure-oriented while C++ is multi-paradigm (procedural + object-oriented).</p>
            </div>`
        },
        {
            number: 2,
            question: "Explain OOP concepts in C++ with detailed examples",
            definition: "Object-Oriented Programming is a programming paradigm based on the concept of objects containing data and methods",
            answer: `<div class="answer-content">
                <h4>Core OOP Concepts in C++:</h4>
                
                <h5>1. Classes and Objects:</h5>
                <ul>
                    <li><strong>Class:</strong> Blueprint or template for creating objects</li>
                    <li><strong>Object:</strong> Instance of a class with state and behavior</li>
                </ul>
                
                <h5>2. Encapsulation:</h5>
                <p>Binds data and functions together and hides internal implementation details.</p>
                <pre><code>class BankAccount {
private:
    double balance;  // hidden data
public:
    void deposit(double amount) {
        balance += amount;
    }
};</code></pre>
                
                <h5>3. Inheritance:</h5>
                <p>Allows creating new classes from existing ones.</p>
                <pre><code>class Vehicle { /* base class */ };
class Car : public Vehicle { /* derived class */ };</code></pre>
                
                <h5>4. Polymorphism:</h5>
                <p>Ability to take multiple forms - compile-time (function overloading) and runtime (virtual functions).</p>
                
                <h5>5. Abstraction:</h5>
                <p>Showing only essential features and hiding implementation details.</p>
                
                <h4>Benefits of OOP:</h4>
                <ul>
                    <li>Code reusability through inheritance</li>
                    <li>Better code organization and modularity</li>
                    <li>Data security through encapsulation</li>
                    <li>Easier maintenance and flexibility</li>
                </ul>
            </div>`
        },
        {
            number: 3,
            question: "What are constructors and destructors in C++? Explain types of constructors",
            definition: "Constructors initialize objects, destructors clean up when objects are destroyed",
            answer: `<div class="answer-content">
                <h4>Constructors:</h4>
                <p>Special member functions that are automatically called when an object is created. They have the same name as the class and no return type.</p>
                
                <h5>Types of Constructors:</h5>
                <ol>
                    <li><strong>Default Constructor:</strong>
                    <pre><code>class Example {
public:
    Example() {  // Default constructor
        cout << "Default constructor called";
    }
};</code></pre>
                    </li>
                    
                    <li><strong>Parameterized Constructor:</strong>
                    <pre><code>class Example {
public:
    Example(int x, int y) {
        cout << "Parameterized constructor";
    }
};</code></pre>
                    </li>
                    
                    <li><strong>Copy Constructor:</strong>
                    <pre><code>class Example {
public:
    Example(const Example &obj) {
        cout << "Copy constructor called";
    }
};</code></pre>
                    </li>
                    
                    <li><strong>Move Constructor (C++11):</strong>
                    <pre><code>Example(Example&& other) noexcept {
        // Transfer resources
    }</code></pre>
                    </li>
                </ol>
                
                <h4>Destructor:</h4>
                <p>Special member function that is called automatically when an object goes out of scope or is deleted.</p>
                <pre><code>class Example {
public:
    ~Example() {
        cout << "Destructor called";
        // Clean up resources
    }
};</code></pre>
                
                <h4>Key Points:</h4>
                <ul>
                    <li>Constructors can be overloaded</li>
                    <li>Destructor cannot take parameters</li>
                    <li>Destructor cannot be overloaded</li>
                    <li>Virtual destructors are important for base classes</li>
                    <li>Rule of Three/Five: If you need custom destructor, copy constructor, or copy assignment, you likely need all three</li>
                </ul>
            </div>`
        },
        {
            number: 4,
            question: "Explain pointers and references in C++. What are the differences between them?",
            definition: "Pointers store memory addresses while references are aliases to existing variables",
            answer: `<div class="answer-content">
                <h4>Pointers:</h4>
                <p>Variables that store memory addresses of other variables.</p>
                <pre><code>int x = 10;
int *ptr = &x;  // ptr stores address of x
*ptr = 20;      // Dereferencing: changes x to 20</code></pre>
                
                <h4>References:</h4>
                <p>Alias name for an existing variable. Must be initialized when declared.</p>
                <pre><code>int x = 10;
int &ref = x;   // ref is reference to x
ref = 20;       // x becomes 20</code></pre>
                
                <h4>Detailed Comparison:</h4>
                <table class="comparison-table">
                    <tr>
                        <th>Aspect</th>
                        <th>Pointer</th>
                        <th>Reference</th>
                    </tr>
                    <tr>
                        <td><strong>Declaration</strong></td>
                        <td>int *ptr;</td>
                        <td>int &ref = variable;</td>
                    </tr>
                    <tr>
                        <td><strong>Initialization</strong></td>
                        <td>Can be declared without initialization</td>
                        <td>Must be initialized at declaration</td>
                    </tr>
                    <tr>
                        <td><strong>Reassignment</strong></td>
                        <td>Can point to different variables</td>
                        <td>Cannot be reassigned after initialization</td>
                    </tr>
                    <tr>
                        <td><strong>NULL value</strong></td>
                        <td>Can be NULL or nullptr</td>
                        <td>Cannot be NULL</td>
                    </tr>
                    <tr>
                        <td><strong>Memory Address</strong></td>
                        <td>Has its own memory address</td>
                        <td>Shares same address as variable</td>
                    </tr>
                    <tr>
                        <td><strong>Arithmetic</strong></td>
                        <td>Pointer arithmetic possible</td>
                        <td>No arithmetic operations</td>
                    </tr>
                    <tr>
                        <td><strong>Syntax</strong></td>
                        <td>Uses * for dereferencing</td>
                        <td>Used like normal variable</td>
                    </tr>
                </table>
                
                <h4>Use Cases:</h4>
                <ul>
                    <li><strong>Use pointers when:</strong> You need dynamic memory allocation, optional parameters (nullptr), or need to change what you're pointing to</li>
                    <li><strong>Use references when:</strong> You need function parameter passing without copying, operator overloading, or range-based for loops</li>
                </ul>
                
                <h4>Example with Functions:</h4>
                <pre><code>// Using pointer
void modifyWithPointer(int *ptr) {
    *ptr = 100;
}

// Using reference
void modifyWithReference(int &ref) {
    ref = 100;
}

int main() {
    int x = 10;
    modifyWithPointer(&x);  // Pass address
    modifyWithReference(x); // Pass variable directly
}</code></pre>
            </div>`
        },
        {
            number: 5,
            question: "What is the Standard Template Library (STL) in C++? Explain its major components",
            definition: "STL is a powerful set of C++ template classes providing common data structures and algorithms",
            answer: `<div class="answer-content">
                <h4>Introduction to STL:</h4>
                <p>The Standard Template Library is a collection of template classes and functions that provide common data structures and algorithms. It's part of the C++ Standard Library.</p>
                
                <h4>Four Major Components of STL:</h4>
                
                <h5>1. Containers:</h5>
                <p>Data structures that store collections of objects.</p>
                <ul>
                    <li><strong>Sequence Containers:</strong>
                        <ul>
                            <li><code>vector</code> - Dynamic array</li>
                            <li><code>list</code> - Doubly linked list</li>
                            <li><code>deque</code> - Double-ended queue</li>
                            <li><code>array</code> - Fixed-size array (C++11)</li>
                            <li><code>forward_list</code> - Singly linked list (C++11)</li>
                        </ul>
                    </li>
                    <li><strong>Associative Containers:</strong>
                        <ul>
                            <li><code>set</code> - Unique keys, sorted</li>
                            <li><code>map</code> - Key-value pairs, sorted by key</li>
                            <li><code>multiset</code> - Allows duplicate keys</li>
                            <li><code>multimap</code> - Multiple values per key</li>
                        </ul>
                    </li>
                    <li><strong>Unordered Containers (C++11):</strong>
                        <ul>
                            <li><code>unordered_set</code></li>
                            <li><code>unordered_map</code></li>
                        </ul>
                    </li>
                    <li><strong>Container Adapters:</strong>
                        <ul>
                            <li><code>stack</code> - LIFO</li>
                            <li><code>queue</code> - FIFO</li>
                            <li><code>priority_queue</code> - Highest priority first</li>
                        </ul>
                    </li>
                </ul>
                
                <h5>2. Algorithms:</h5>
                <p>Functions that perform operations on containers.</p>
                <pre><code>#include &lt;algorithm&gt;
#include &lt;vector&gt;

std::vector&lt;int&gt; v = {5, 2, 8, 1, 9};
std::sort(v.begin(), v.end());      // Sorting
auto it = std::find(v.begin(), v.end(), 8);  // Searching
std::reverse(v.begin(), v.end());   // Reversing</code></pre>
                
                <h5>3. Iterators:</h5>
                <p>Objects that point to elements in containers (similar to pointers).</p>
                <pre><code>std::vector&lt;int&gt;::iterator it;
for(it = v.begin(); it != v.end(); ++it) {
    cout << *it << " ";
}

// Range-based for loop (C++11)
for(auto &element : v) {
    cout << element << " ";
}</code></pre>
                
                <h5>4. Function Objects (Functors):</h5>
                <p>Objects that can be called like functions.</p>
                <pre><code>struct Square {
    int operator()(int x) const {
        return x * x;
    }
};

Square sq;
int result = sq(5);  // result = 25</code></pre>
                
                <h4>Benefits of STL:</h4>
                <ul>
                    <li>Code reusability</li>
                    <li>Type safety through templates</li>
                    <li>Efficiency and optimized algorithms</li>
                    <li>Reduces development time</li>
                    <li>Standardized and portable code</li>
                </ul>
                
                <h4>Example: Complete STL Program</h4>
                <pre><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
#include &lt;map&gt;

int main() {
    // Vector example
    std::vector&lt;int&gt; numbers = {3, 1, 4, 1, 5, 9};
    std::sort(numbers.begin(), numbers.end());
    
    // Map example
    std::map&lt;std::string, int&gt; ageMap;
    ageMap["Alice"] = 25;
    ageMap["Bob"] = 30;
    
    // Algorithm example
    auto countOnes = std::count(numbers.begin(), numbers.end(), 1);
    
    return 0;
}</code></pre>
            </div>`
        },
        {
            number: 6,
            question: "Explain memory management in C++ including stack vs heap, new/delete operators, and smart pointers",
            definition: "Memory management involves allocation and deallocation of memory during program execution",
            answer: `<div class="answer-content">
                <h4>Memory Areas in C++:</h4>
                
                <h5>1. Stack Memory:</h5>
                <ul>
                    <li>Automatically managed by compiler</li>
                    <li>Stores local variables, function parameters, return addresses</li>
                    <li>Fast allocation/deallocation</li>
                    <li>Limited size (typically 1-8 MB)</li>
                    <li>LIFO (Last In First Out) structure</li>
                </ul>
                
                <h5>2. Heap Memory:</h5>
                <ul>
                    <li>Dynamically allocated memory</li>
                    <li>Managed manually by programmer</li>
                    <li>Larger size available</li>
                    <li>Slower than stack</li>
                    <li>Memory leaks possible if not managed properly</li>
                </ul>
                
                <h4>Manual Memory Management:</h4>
                <pre><code>// C-style
int *arr = (int*)malloc(10 * sizeof(int));
free(arr);

// C++ style
int *ptr = new int;      // Single element
int *arr = new int[10];  // Array
delete ptr;              // Single element
delete[] arr;            // Array</code></pre>
                
                <h4>Smart Pointers (C++11 and later):</h4>
                <p>Automatic memory management to prevent memory leaks.</p>
                
                <h5>1. unique_ptr:</h5>
                <ul>
                    <li>Exclusive ownership of resource</li>
                    <li>Cannot be copied, only moved</li>
                    <li>Automatically deletes when out of scope</li>
                </ul>
                <pre><code>#include &lt;memory&gt;
std::unique_ptr&lt;int&gt; ptr1 = std::make_unique&lt;int&gt;(10);
// std::unique_ptr&lt;int&gt; ptr2 = ptr1; // Error: cannot copy
std::unique_ptr&lt;int&gt; ptr2 = std::move(ptr1); // OK: transfer ownership</code></pre>
                
                <h5>2. shared_ptr:</h5>
                <ul>
                    <li>Shared ownership using reference counting</li>
                    <li>Can be copied</li>
                    <li>Deletes when last shared_ptr is destroyed</li>
                </ul>
                <pre><code>std::shared_ptr&lt;int&gt; ptr1 = std::make_shared&lt;int&gt;(20);
std::shared_ptr&lt;int&gt; ptr2 = ptr1; // Both point to same memory
// Reference count = 2</code></pre>
                
                <h5>3. weak_ptr:</h5>
                <ul>
                    <li>Non-owning reference to shared_ptr</li>
                    <li>Prevents circular references</li>
                    <li>Doesn't increase reference count</li>
                </ul>
                <pre><code>std::weak_ptr&lt;int&gt; weak = ptr1;
if(auto shared = weak.lock()) {
    // Can use shared pointer
}</code></pre>
                
                <h4>Memory Leaks and Prevention:</h4>
                <p><strong>Common causes:</strong> Forgetting delete, exceptions before delete, circular references</p>
                <p><strong>Prevention techniques:</strong></p>
                <ol>
                    <li>Use smart pointers instead of raw pointers</li>
                    <li>Follow RAII (Resource Acquisition Is Initialization) principle</li>
                    <li>Use containers (vector, string) instead of raw arrays</li>
                    <li>Use scope guards for cleanup</li>
                </ol>
                
                <h4>RAII (Resource Acquisition Is Initialization):</h4>
                <p>Bind resource lifetime to object lifetime.</p>
                <pre><code>class FileHandler {
private:
    FILE *file;
public:
    FileHandler(const char* filename) : file(fopen(filename, "r")) {
        if(!file) throw std::runtime_error("File open failed");
    }
    
    ~FileHandler() {
        if(file) fclose(file);  // Automatically called
    }
    
    // No copy constructor/assignment
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
};

// Usage
void processFile() {
    FileHandler fh("data.txt");
    // File automatically closed when fh goes out of scope
}</code></pre>
                
                <h4>Best Practices:</h4>
                <ul>
                    <li>Prefer stack allocation for small, short-lived objects</li>
                    <li>Use smart pointers for dynamic allocation</li>
                    <li>Avoid raw new/delete in modern C++</li>
                    <li>Use std::vector instead of dynamic arrays</li>
                    <li>Consider memory pools for frequent allocations</li>
                </ul>
            </div>`
        }
    ]
},
    dsa: {
        title: "Data Structures & Algorithms",
        icon: "<i class='fas fa-sitemap'></i>",
        questions: [
            {
                number: 1,
                question: "What is a data structure?",
                definition: "Organized way to store and organize computer data",
                answer: `<div class="answer-content"><h4>Definition:</h4><p>Data structure is a specialized format for organizing, processing, and storing data. It enables efficient access and modification.</p></div>`
            },
            {
                number: 2,
                question: "Explain Big O notation",
                definition: "Mathematical notation describing algorithm efficiency",
                answer: `<div class="answer-content"><h4>Big O:</h4><p>Describes upper limit of algorithm's time/space complexity. Used for worst-case analysis.</p></div>`
            },
            {
                number: 3,
                question: "What is the difference between array and linked list?",
                definition: "Contiguous vs dynamic storage",
                answer: `<div class="answer-content"><h4>Array:</h4><ul><li>Contiguous memory</li><li>Fixed size</li><li>Fast access O(1)</li></ul><h4>Linked List:</h4><ul><li>Non-contiguous</li><li>Dynamic size</li><li>Slow access O(n)</li></ul></div>`
            },
            {
                number: 4,
                question: "Explain binary search",
                definition: "Algorithm for searching in sorted arrays",
                answer: `<div class="answer-content"><h4>Binary Search:</h4><p>Divides the search interval in half. Time complexity: O(log n). Works only on sorted data.</p></div>`
            },
            {
                number: 5,
                question: "What are sorting algorithms?",
                definition: "Techniques to arrange data in order",
                answer: `<div class="answer-content"><h4>Common Algorithms:</h4><ul><li>Bubble Sort - O(n²)</li><li>Merge Sort - O(n log n)</li><li>Quick Sort - O(n log n)</li></ul></div>`
            }
        ]
    }
};

console.log('practice_questions.js loaded successfully!');
console.log('Total subjects:', Object.keys(practiceQuestions).length);
console.log('Subjects:', Object.keys(practiceQuestions).join(', '));
