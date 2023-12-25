# - Devjobs web app
* DevJobs is a job finding platform for software developers. The platform allows software developers to search for job postings and apply for jobs.

## Technologies used in the development of the site
- **HTML5**
- **CSS3**
- **JavaScript**
- **Local Storage**

![bbc696e6-f3c7-498e-b354-2e27fba52aac](https://github.com/haciyev13/DevJobs_Project-App/assets/121634384/5e76d587-a718-4ab1-958f-9b6af0cd5ec9)

## Installation

1. Clone the repository or download the ZIP file.
2. Open the project directory.
3. Open the `index.html` file in a web browser.


## Code Overview

The JavaScript code is structured to facilitate key operations:

### 1. Job Listings Display (`getData`)

The `getData` function is responsible for rendering job listings on the main page (`index.html`). Each job listing includes essential details such as:

- Job title
- Company name
- Location
- Work type (Full Time, Part Time, etc.)
- Time posted


### Usage:

Call the `getData` function and pass an array of job data as an argument. The function will generate HTML content dynamically based on the provided job data and display it on the main page.

#### Example:

```javascript
// Assuming 'data' is an array of job objects
getData(data);
```

The function utilizes HTML templates to dynamically generate the content based on the provided job data.

---
<br>


### 2. Job Search Functionality (`search`)

The `search` function facilitates job searches based on user-specified criteria. Users can search by job title, location, and work type. The search results are then displayed on the main page, providing a streamlined approach to finding relevant job listings.


### Usage:

Call the `search` function with the search term, key, and the array of data as arguments. The function returns an array of filtered job data based on the search criteria.

#### Example:

```javascript
// Assuming 'data' is an array of job objects
const searchTerm = 'JavaScript Developer';
const searchKey = 'title';
const searchResults = search(searchTerm, searchKey, data);
console.log(searchResults); // Output: Array of job objects matching the search criteria
```


---
<br>

<br>


### 3. Current Page Information (`getCurrentUrl`)

The `getCurrentUrl` function extracts information about the current page, including the page name and any relevant parameters (e.g., job ID). This function is crucial for determining the context and executing page-specific logic, such as editing or adding job listings.

### Usage:

Call the `getCurrentUrl` function to obtain an object containing information about the current page, such as the page name and ID.

#### Example:

```javascript
const pageInformation = getCurrentUrl();
console.log(pageInformation.pageName); // Output: Current page name
console.log(pageInformation.id); // Output: Current job ID (if applicable)
```
<br>




### 4. Dark Theme Support

The application includes a dark theme feature to enhance user experience. Users can toggle between dark and light themes using the provided switch at the top of the page.

<br>


## 🌎 Live Preview

[https://api-exchange.netlify.app/](https://splendid-profiterole-08c5af.netlify.app/)

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please submit a pull request.

## Author

Ehed Haciyev & DevJobs_Project
