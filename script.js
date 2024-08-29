// script.js

// Validation function to restrict the number of characters in the "Tagline" field and validate the phone number
function validateForm() {
    const tagline = document.getElementById('tagline').value;
    const phone = document.getElementById('phone').value;

    if (tagline.length > 50) {
        alert("The tagline must be 50 characters or less.");
        return false;
    }

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}

// Function to process the order and generate a receipt
function processOrder(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    if (!validateForm()) return; // If validation fails, stop the process

    // Create a receipt
    const receipt = `
        <h2>Order Confirmation</h2>
        <p>Thank you for your order! Here are your order details:</p>
        <ul>
            <li>Tagline: ${document.getElementById('tagline').value}</li>
            <li>Color: ${document.getElementById('color').value}</li>
            <li>Size: ${document.getElementById('size').value}</li>
            <li>Quantity: ${document.getElementById('quantity').value}</li>
            <li>Delivery Date: ${document.getElementById('delivery-date').value}</li>
            <li>Name: ${document.getElementById('name').value}</li>
            <li>Address: ${document.getElementById('address').value}</li>
            <li>Email: ${document.getElementById('email').value}</li>
            <li>Phone: ${document.getElementById('phone').value}</li>
            <li>Comments: ${document.getElementById('comments').value}</li>
        </ul>
        <p>Date of Receipt: ${new Date().toLocaleDateString()}</p>
    `;

    // Display the receipt in a new window or a new page
    const receiptWindow = window.open('', 'Receipt', 'width=600,height=400');
    receiptWindow.document.write(receipt);
    receiptWindow.document.close();
}

// Attach event listeners to form buttons
document.querySelector('form').addEventListener('submit', processOrder);

// Person class definition
class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    // Arrow function as a non-member function
    printDetails = () => {
        console.log(`Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}`);
    };
}

// Create an instance of Person and print details
const person = new Person(
    document.getElementById('name').value,
    document.getElementById('address').value,
    document.getElementById('email').value,
    document.getElementById('phone').value
);
person.printDetails();

// Student class extending Person class
class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo === 0) {
            throw new Error("Roll number cannot be zero.");
        }
        this.rollNo = rollNo;
    }

    // Overriding printDetails method
    printDetails() {
        super.printDetails(); // Call the parent method
        console.log(`Roll No: ${this.rollNo}`);
    }
}

// Create an instance of Student and print details
try {
    const student = new Student('John Doe', '123 Main St', 'john@example.com', '9876543210', 1);
    student.printDetails();
} catch (error) {
    console.error(error.message);
}
