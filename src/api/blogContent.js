export const POSTS = [
  {
    id: 1,
    date: "17/10/2024",
    tag: "React",
    image: "images/project1.png",
    slug: "Patrones-Modernos-React",
    title:
      "Patrones Modernos en React: Cómo Mejorar la Eficiencia y Escalabilidad de tus Componentes",
    excerpt:
      "React sigue siendo una de las bibliotecas más populares para construir interfaces de usuario en el mundo del desarrollo web. Con su enfoque en componentes reutilizables y su eficiente Virtual DOM...",
    content:
      "React sigue siendo una de las bibliotecas más populares para el desarrollo de aplicaciones frontend, pero para aprovechar al máximo su potencial, es importante conocer y aplicar patrones modernos y buenas prácticas. En este artículo, exploraremos algunos de los patrones más efectivos y actuales para mejorar la eficiencia y escalabilidad de tus componentes en React, tales como **Render Props**, **Hooks personalizados**, y el uso de **Context API**.\n\n## 1. Render Props\n\nEl patrón **Render Props** es una técnica que permite compartir lógica entre componentes en React utilizando una función como prop. Este patrón es particularmente útil para evitar la duplicación de lógica y mantener la flexibilidad de los componentes.\n\n### Ejemplo de Render Props\n\nSupongamos que tenemos un componente que maneja la lógica de hover (cuando el usuario pasa el cursor sobre un elemento). Utilizando Render Props, podemos crear un componente reutilizable:\n\n```jsx\nimport React, { useState } from 'react';\n\nconst Hover = ({ children }) => {\n  const [hovered, setHovered] = useState(false);\n\n  return (\n    <div\n      onMouseEnter={() => setHovered(true)}\n      onMouseLeave={() => setHovered(false)}\n    >\n      {children(hovered)}\n    </div>\n  );\n};\n\n// Uso del componente Hover con Render Props\nconst App = () => (\n  <Hover>\n    {(hovered) => (\n      <div style={{ color: hovered ? 'blue' : 'black' }}>\n        {hovered ? '¡Estás sobre mí!' : 'Pasa el mouse por aquí'}\n      </div>\n    )}\n  </Hover>\n);\n\nexport default App;\n```\n\nEn este ejemplo, el componente Hover maneja la lógica de estado y expone un render prop, permitiendo que el componente hijo decida cómo se debe mostrar cuando el cursor está o no sobre él.\n\n## 2. Hooks Personalizados\n\nLos Hooks personalizados son una de las formas más modernas y eficaces de reutilizar lógica en React. Al encapsular la lógica en un Hook personalizado, puedes compartir funcionalidad sin la necesidad de reestructurar tus componentes o usar patrones más complicados como las render props o los HOCs (Higher-Order Components).\n\n### Ejemplo de Hook Personalizado\n\nSupongamos que queremos reutilizar la lógica de manejo de formularios en varios componentes:\n\n```jsx\nimport { useState } from 'react';\n\nconst useForm = (initialValues) => {\n  const [values, setValues] = useState(initialValues);\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setValues({ ...values, [name]: value });\n  };\n\n  const resetForm = () => setValues(initialValues);\n\n  return [values, handleChange, resetForm];\n};\n\n// Uso del Hook personalizado en un componente de formulario\nconst FormComponent = () => {\n  const [formValues, handleChange, resetForm] = useForm({ name: '', email: '' });\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Form Values:', formValues);\n    resetForm();\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name=\"name\"\n        value={formValues.name}\n        onChange={handleChange}\n        placeholder=\"Nombre\"\n      />\n      <input\n        name=\"email\"\n        value={formValues.email}\n        onChange={handleChange}\n        placeholder=\"Email\"\n      />\n      <button type=\"submit\">Enviar</button>\n    </form>\n  );\n};\n\nexport default FormComponent;\n```\n\nEn este ejemplo, useForm es un Hook personalizado que encapsula la lógica de manejo de estado de un formulario, y puede ser reutilizado en cualquier componente que maneje formularios.\n\n## 3. Uso de Context API para Manejo de Estado Global\n\nEl Context API es una poderosa herramienta nativa en React que permite manejar el estado global de una aplicación sin necesidad de una librería adicional como Redux. Es ideal para manejar información que debe ser accesible en varios niveles de la jerarquía de componentes, como el usuario autenticado, el tema de la aplicación, o la configuración global.\n\n### Ejemplo de Context API\n\nVeamos cómo podemos usar el Context API para compartir la información del usuario autenticado en la aplicación:\n\n```jsx\nimport React, { createContext, useContext, useState } from 'react';\n\n// Creación del Context\nconst AuthContext = createContext();\n\n// Proveedor de contexto\nconst AuthProvider = ({ children }) => {\n  const [user, setUser] = useState(null);\n\n  const login = (username) => setUser({ name: username });\n  const logout = () => setUser(null);\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n};\n\n// Hook personalizado para usar el contexto de autenticación\nconst useAuth = () => useContext(AuthContext);\n\n// Componente que usa el contexto\nconst UserProfile = () => {\n  const { user, login, logout } = useAuth();\n\n  return (\n    <div>\n      {user ? (\n        <>\n          <p>Hola, {user.name}</p>\n          <button onClick={logout}>Cerrar sesión</button>\n        </>\n      ) : (\n        <button onClick={() => login('Usuario Demo')}>Iniciar sesión</button>\n      )}\n    </div>\n  );\n};\n\n// Uso del proveedor en la aplicación\nconst App = () => (\n  <AuthProvider>\n    <UserProfile />\n  </AuthProvider>\n);\n\nexport default App;\n```\n\nEn este ejemplo, creamos un Context para manejar la información de autenticación de la aplicación y un Provider que se encarga de proporcionar esa información a los componentes hijos. Además, creamos un Hook personalizado (useAuth) para simplificar el acceso al contexto en los componentes.\n\n## Conclusión\n\nAl utilizar patrones modernos como Render Props, Hooks personalizados, y el Context API, puedes hacer que tus componentes en React sean más reutilizables, escalables y fáciles de mantener. Estos patrones no solo ayudan a mantener el código limpio y modular, sino que también permiten desarrollar aplicaciones más eficientes y flexibles. ¡Pon en práctica estos patrones y lleva tus aplicaciones de React al siguiente nivel!\n",
  },
  {
    id: 2,
    date: "09/10/2024",
    tag: "React",
    image: "images/project1.png",
    slug: "react-arquitectura-componentes",
    title:
      "React y la Arquitectura basada en Componentes: Construyendo Interfaces Reutilizables y Mantenibles",
    excerpt:
      "React se ha consolidado como una de las bibliotecas más populares para la creación de interfaces de usuario, en gran parte gracias a su arquitectura basada en componentes...",
    content:
      "# React y la Arquitectura basada en Componentes: Construyendo Interfaces Reutilizables y Mantenibles\n\nReact se ha consolidado como una de las bibliotecas más populares para la creación de interfaces de usuario, en gran parte gracias a su arquitectura basada en componentes. Esta arquitectura permite construir aplicaciones modulares, escalables y fáciles de mantener, características clave para el éxito en proyectos de gran escala y equipos de desarrollo colaborativos. En este artículo, exploraremos cómo estructurar aplicaciones React utilizando componentes reutilizables, y destacaremos las mejores prácticas y principios para crear interfaces limpias y eficientes.\n\n## 1. La Importancia de la Arquitectura Basada en Componentes\n\nLa arquitectura basada en componentes en React se fundamenta en la creación de **bloques modulares de UI** que pueden ser reutilizados en diferentes partes de la aplicación. Cada componente maneja su propio estado y lógica, encapsulando el comportamiento y las vistas necesarias para cumplir con su función específica.\n\nEsta separación facilita:\n- **Reutilización**: Al crear componentes genéricos y flexibles, podemos reutilizarlos en varias secciones de la aplicación, evitando duplicación de código.\n- **Escalabilidad**: Dividir la interfaz en pequeñas piezas facilita el escalamiento de la aplicación, ya que es posible integrar nuevos módulos o funcionalidades sin afectar el resto del sistema.\n- **Colaboración**: Trabajar en un proyecto modular permite que múltiples desarrolladores trabajen en diferentes componentes de manera independiente, minimizando conflictos y simplificando la integración.\n\n## 2. Estructura de Componentes en React\n\nPara aprovechar al máximo la arquitectura basada en componentes, es fundamental estructurar tu aplicación siguiendo un enfoque **modular** y **jerárquico**. Los componentes pueden clasificarse en tres grandes categorías:\n\n1. **Componentes de Presentación**: Son aquellos que se encargan únicamente de la UI. No manejan lógica de negocio y reciben datos a través de props.\n2. **Componentes de Contenedor**: Se encargan de manejar el estado y la lógica de la aplicación, y suelen utilizar componentes de presentación para renderizar la UI.\n3. **Componentes de Alto Nivel**: Estos componentes se encargan de manejar rutas y lógica de estado global, y son los que organizan la estructura general de la aplicación.\n\n### Ejemplo de Estructura de Componentes\n\n```jsx\n// Componentes de presentación\nconst Button = ({ label, onClick }) => (\n  <button onClick={onClick}>{label}</button>\n);\n\nconst UserProfile = ({ user }) => (\n  <div>\n    <h2>{user.name}</h2>\n    <p>{user.email}</p>\n  </div>\n);\n\n// Componente de contenedor\nconst UserContainer = () => {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    // Simulación de una llamada API\n    setTimeout(() => setUser({ name: 'Juan Pérez', email: 'juan@example.com' }), 1000);\n  }, []);\n\n  return user ? <UserProfile user={user} /> : <p>Cargando...</p>;\n};\n\n// Componente de alto nivel\nconst App = () => (\n  <div>\n    <h1>Aplicación de Usuarios</h1>\n    <UserContainer />\n    <Button label=\"Hacer algo\" onClick={() => alert('Acción ejecutada')} />\n  </div>\n);\n\nexport default App;\n```\n\nEn este ejemplo, Button y UserProfile son componentes de presentación que se encargan solo de la interfaz. UserContainer maneja la lógica de datos (en este caso, simulando una llamada a una API para obtener un usuario). Finalmente, App organiza la estructura general de la aplicación y coordina la renderización de los otros componentes.\n\n## 3. Mejores Prácticas para Crear Componentes Reutilizables\n\nPara maximizar la reutilización y mantenibilidad de tus componentes, es importante seguir ciertas mejores prácticas:\n\n### a. Componentes Pequeños y Funcionales\n\nEs recomendable construir componentes pequeños y específicos que cumplan una única función. Los componentes que intentan manejar múltiples responsabilidades son más difíciles de mantener y probar. En su lugar, separa la lógica y la presentación en componentes distintos para mantener una arquitectura más clara.\n\n### b. Uso de Props y Hooks para la Flexibilidad\n\nLos props son clave para la reutilización de componentes. Permiten pasar datos y comportamientos a los componentes, lo que los hace adaptables a distintos escenarios. Además, los Hooks proporcionan una manera eficiente de manejar el estado y los efectos secundarios en componentes funcionales, facilitando la reutilización de lógica.\n\n```jsx\nconst InputField = ({ label, value, onChange }) => (\n  <div>\n    <label>{label}</label>\n    <input value={value} onChange={onChange} />\n  </div>\n);\n```\n\nEste componente InputField puede ser utilizado en cualquier parte de la aplicación y personalizarse simplemente pasando diferentes valores y manejadores de eventos a través de props.\n\n### c. Composición de Componentes\n\nEn lugar de construir componentes monolíticos, aprovecha el patrón de composición para construir componentes más complejos combinando componentes más pequeños. Esto facilita la reutilización y reduce la duplicación de código.\n\n```jsx\nconst Card = ({ title, children }) => (\n  <div className=\"card\">\n    <h3>{title}</h3>\n    <div className=\"card-content\">{children}</div>\n  </div>\n);\n\n// Uso del componente Card con otros componentes\nconst UserCard = ({ user }) => (\n  <Card title=\"Información del Usuario\">\n    <UserProfile user={user} />\n  </Card>\n);\n```\n\nEn este ejemplo, Card es un componente genérico que acepta otros componentes como hijos, permitiendo reutilizar la estructura en distintos contextos.\n\n## 4. Uso de Context API para Manejo de Estado Global\n\nEn aplicaciones a gran escala, es común que varios componentes necesiten acceder a la misma información. El Context API de React es una forma eficiente de manejar el estado global, eliminando la necesidad de pasar props manualmente por múltiples niveles de componentes.\n\n```jsx\nimport React, { createContext, useState, useContext } from 'react';\n\n// Creación del contexto\nconst ThemeContext = createContext();\n\n// Proveedor del contexto\nconst ThemeProvider = ({ children }) => {\n  const [theme, setTheme] = useState('light');\n  \n  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n};\n\n// Hook personalizado para consumir el contexto\nconst useTheme = () => useContext(ThemeContext);\n\n// Ejemplo de componente usando el contexto\nconst ThemeToggleButton = () => {\n  const { theme, toggleTheme } = useTheme();\n  return <button onClick={toggleTheme}>Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}</button>;\n};\n\nconst App = () => (\n  <ThemeProvider>\n    <div>\n      <h1>Aplicación con Context API</h1>\n      <ThemeToggleButton />\n    </div>\n  </ThemeProvider>\n);\n\nexport default App;\n```\n\n## Conclusión\n\nLa arquitectura basada en componentes de React es una poderosa herramienta para crear aplicaciones modulares, escalables y mantenibles. Al estructurar tus componentes de manera jerárquica y aplicar principios de composición, reutilización y separación de lógica, puedes construir interfaces eficientes y colaborativas en proyectos de cualquier tamaño. ¡Aprovecha estas técnicas y lleva tus aplicaciones React a un nuevo nivel!\n",
  },
  {
    id: 3,
    date: "09/10/2024",
    tag: "Algoritmos",
    image: "images/project1.png",
    slug: "complejidad-temporal-y-espacial",
    title: "Entendiendo la Complejidad Temporal y Espacial",
    excerpt:
      "La complejidad es un concepto esencial en el estudio de algoritmos y estructuras de datos. Se utiliza para medir la eficiencia de un algoritmo en términos de los recursos que utiliza,...",
    content:
      "# Entendiendo la Complejidad Temporal y Espacial\n\nLa complejidad es un concepto esencial en el estudio de algoritmos y estructuras de datos. Se utiliza para medir la eficiencia de un algoritmo en términos de los recursos que utiliza, como el tiempo de ejecución y la memoria. Dos de las métricas más importantes son la complejidad temporal y la complejidad espacial. A continuación, exploraremos estos conceptos y su importancia en el análisis de algoritmos.\n\n## Complejidad Temporal\n\nLa complejidad temporal se refiere a la cantidad de tiempo que un algoritmo necesita para completarse en función del tamaño de la entrada. Se expresa generalmente utilizando notación asintótica, que permite describir el comportamiento de un algoritmo a medida que el tamaño de la entrada crece.\n\n### Notación Asintótica\n\nLa notación asintótica más comúnmente utilizada incluye:\n\n- **O (Big O)**: Representa el peor caso de la complejidad temporal. Indica el tiempo máximo que podría tardar un algoritmo en ejecutarse.\n- **Ω (Omega)**: Representa el mejor caso de la complejidad temporal. Indica el tiempo mínimo que podría tardar un algoritmo en ejecutarse.\n- **Θ (Theta)**: Representa el caso promedio de la complejidad temporal. Indica un límite ajustado, donde el tiempo de ejecución se sitúa entre el peor y el mejor caso.\n\n### Ejemplos de Complejidad Temporal\n\n- **O(1) - Tiempo constante**: Un algoritmo que toma el mismo tiempo sin importar el tamaño de la entrada. Por ejemplo, acceder a un elemento de un arreglo:\n\n```python\ndef get_first_element(arr):\n    return arr[0]\n```\n\n- **O(n) - Tiempo lineal**: Un algoritmo cuya ejecución aumenta linealmente con el tamaño de la entrada. Por ejemplo, recorrer un arreglo:\n\n```python\ndef print_elements(arr):\n    for element in arr:\n        print(element)\n```\n\n- **O(n^2) - Tiempo cuadrático**: Un algoritmo cuya ejecución aumenta cuadráticamente con el tamaño de la entrada. Esto es común en algoritmos de ordenación como Bubble Sort:\n\n```python\n\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n```\n\n## Complejidad Espacial\n\nLa complejidad espacial se refiere a la cantidad de memoria que un algoritmo utiliza en función del tamaño de la entrada. Al igual que con la complejidad temporal, se expresa en términos de notación asintótica.\n\n### Importancia de la Complejidad Espacial\n\nLa complejidad espacial es crucial porque el uso excesivo de memoria puede hacer que un algoritmo sea inviable, especialmente en sistemas con recursos limitados. Además, un algoritmo que consume mucha memoria puede llevar a una mayor latencia debido al tiempo que toma acceder a la memoria.\n\n### Ejemplos de Complejidad Espacial\n\n- **O(1) - Espacio constante**: Un algoritmo que utiliza la misma cantidad de memoria independientemente del tamaño de la entrada. Por ejemplo:\n\n```python\ndef sum_two_numbers(a, b):\n    return a + b\n```\n\n- **O(n) - Espacio lineal**: Un algoritmo que utiliza espacio en función del tamaño de la entrada. Por ejemplo, duplicar un arreglo:\n\n```python\ndef duplicate_array(arr):\n    new_arr = []\n    for element in arr:\n        new_arr.append(element)\n    return new_arr\n```\n\n- **O(n^2) - Espacio cuadrático**: Un algoritmo que utiliza espacio cuadrático en función del tamaño de la entrada. Un ejemplo podría ser la creación de una matriz bidimensional:\n\n```python\ndef create_matrix(n):\n    matrix = [[0 for _ in range(n)] for _ in range(n)]\n    return matrix\n```\n\n## Cómo Evaluar la Complejidad\n\nPara evaluar la complejidad temporal y espacial de un algoritmo, puedes seguir estos pasos:\n\n1. **Identificar el problema**: Define claramente el problema que el algoritmo está resolviendo.\n2. **Analizar el algoritmo**: Realiza un análisis de cada operación del algoritmo y su relación con el tamaño de la entrada.\n3. **Contar las operaciones**: Cuenta las operaciones más costosas (por ejemplo, bucles anidados) para determinar la complejidad temporal y espacial.\n4. **Usar la notación asintótica**: Expresa los resultados utilizando la notación asintótica adecuada (O, Ω, Θ).\n\n## Consideraciones Finales\n\nAl elegir un algoritmo, es fundamental considerar tanto la complejidad temporal como la espacial, especialmente en aplicaciones de gran escala. Un algoritmo puede ser rápido (baja complejidad temporal) pero puede consumir mucha memoria (alta complejidad espacial), o viceversa. La elección de un algoritmo adecuado depende de las necesidades específicas del problema y de los recursos disponibles.\n\n## Conclusión\n\nEntender la complejidad temporal y espacial es crucial para el desarrollo de software eficiente y escalable. A medida que los sistemas y aplicaciones se vuelven más complejos, el análisis cuidadoso de estos factores se convierte en una habilidad indispensable para cualquier desarrollador. Al aplicar estos conceptos, podrás tomar decisiones más informadas sobre qué algoritmos y estructuras de datos utilizar en tus proyectos.",
  },
];

export const SKILLS = [
  { skill: "Javascript" },
  { skill: "Frontend" },
  { skill: "React Native" },
  { skill: "React" },
  { skill: "TailwindCSS" },
  { skill: "Vite" },
  { skill: "Github" },
  { skill: "SQL" },
  { skill: "MongoDB" },
  { skill: "Figma" },
];

export const PROYECTS = [
  {
    id: 1,
    title: "Smart Wacth: Landing Page",
    socials: [
      {
        name: "Github",
        url: "https://github.com/CabreraDFall/ladingSmartWatch",
      },

      { name: "Globe", url: "" },
    ],
    content:
      "Con una estética limpia y minimalista, junto con elementos interactivos atractivos, los usuarios se sumergen de inmediato en el mundo de la tecnología portátil.",
    tags: ["React", "TailwindCSS"],
    image: "images/SMART-Project.png",
  },
  {
    id: 2,
    title: "Coffee Shop: Movil App",
    socials: [
      {
        name: "Github",
        url: "https://github.com/CabreraDFall/ladingSmartWatch",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/community/file/1429046906847768072/cofee-app",
      },
    ],
    content:
      "Es una aplicación de café desarrollada en React Native que permite a los usuarios explorar menús, personalizar pedidos y realizar compras en línea. Con una interfaz intuitiva y un sistema de recompensas, disfrutar de tu café favorito nunca ha sido tan fácil y conveniente.",
    tags: ["React Native", "TailwindCSS", "API", "Node.JS"],
    image: "images/url-Project.png",
  },
  {
    id: 3,
    title: "URL Shorter: Web App",
    socials: [
      {
        name: "Github",
        url: "https://github.com/CabreraDFall/urlShorter",
      },

      { name: "Globe", url: "" },
    ],
    content:
      "Es una aplicación web  efectiva que permite a los usuarios acortar enlaces largos en segundos. Con una interfaz amigable, los usuarios pueden pegar su URL, obtener un enlace corto y compartirlo fácilmente en redes sociales o mensajes",
    tags: ["React", "TailwindCSS"],
    image: "images/url-Project.png",
  },
];
export default POSTS;
