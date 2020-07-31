// Importing JS dependancies
import { handleSubmit } from './js/clickHandler';
import { validateURL } from './js/validURL';

// Importing resource dependancies
import './styles/main_style.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/body.scss';
import './styles/result.scss';

console.log('Inside index.js');

// Export JS modules
export{
    handleSubmit,
    validateURL,   
}