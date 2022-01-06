import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();
    this.state = {
      input_content: '',
      post_list: posts
    }
  }

  handleChange = (e) => {
    this.setState({ input_content: e.target.value })
    if (this.state.input_content.trim().length > 0) {
      let clone = posts.filter((value) => (value.title.toLowerCase().includes(this.state.input_content) && value));
      this.setState({ post_list: clone });
    }
    else if (this.state.input_content.length <= 0) {
      this.setState({ post_list: posts });
    }

  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.handleChange} />
        </div>
        <ul>
          {
            this.state.post_list.map((value, index) => {
              return (
                <li key={index}>
                  <a href={value.url}><img src={value.image} alt="AAA" /></a>
                  <p>{value.title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


export default App


