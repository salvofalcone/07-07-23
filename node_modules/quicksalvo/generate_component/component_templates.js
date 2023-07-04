// index.css
export function index(name) {
  return `.${name} {
    /* add your style  */
  }`;
}

// component.js
export function component(name) {
  return `import './index.css';

const ${name} = () => {
  return (
    <div className="${name}"> ${name} </div>
  );
};

export default ${name};
`;
}

// index.js
export function barrel(name) {
  return `import ${name} from './${name}.js';

export default ${name};
`;
}
