# FeaturedProject Component Usage

The FeaturedProject component is designed to showcase your best projects with animated icons and project details.

## Requirements

- Make sure to install the required dependencies:
  ```bash
  npm install framer-motion lottie-react
  ```

## Lottie Icon Files

Place your Lottie animation JSON files in the `/public/static/icons/` directory. Each project should have its own animation file, named according to the `icon` property in your project data.

## Project Data Structure

Each project should follow this structure:

```javascript
{
  title: 'Project Name',
  description: 'Brief project description',
  icon: 'iconFileName', // without the .json extension
  url: 'https://project-url.com',
  stats: 'Optional stats to display' // omit this field if not needed
}
```

## Implementation Example

```javascript
import FeaturedProject from '../components/FeaturedProject'

// In your component:
<FeaturedProject project={projectData} index={0} />
```

The `index` prop is used for hover animations and should be unique for each project in a list.
