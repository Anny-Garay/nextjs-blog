export default (req, res) => {
    // Aquí puedes realizar operaciones para obtener datos de una API o base de datos
    const articles = [
      { id: 1, 
        title: "Luis" },
      { id: 2, 
        title: "Anny" },
      { id: 3, 
        title: "Miguel" },
      { id: 4, 
        title: "Italo" },
      // ...otros datos
    ];
  
    res.status(200).json(articles);
  };