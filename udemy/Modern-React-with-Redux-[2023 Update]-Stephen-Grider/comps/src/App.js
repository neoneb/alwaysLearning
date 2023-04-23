import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'sdfsdf',
      label: 'can I use Python on a Project?',
      content:
        'you can use React on any Project you want. you can use React on any Project you want. you can use React on any Project you want. you can use React on any Project you want.',
    },

    {
      id: 'sdf34663',
      label: 'can I use JavaScript on a Project?',
      content:
        'you can use JavaScript on any Project you want. you can use JavaScript on any Project you want. you can use JavaScript on any Project you want. you can use JavaScript on any Project you want.',
    },

    {
      id: 'sd3464df',
      label: 'can I use Python on a Project?',
      content:
        'you can use Python on any Project you want. you can use Python on any Project you want. you can use Python on any Project you want. you can use Python on any Project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
