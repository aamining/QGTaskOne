import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QA from './Components/QA';
import Faq from './Components/Faq';
import Title from './Components/Title';
import Area from './Components/Area';
import Search from './Components/Search';
import SearchOutput from './Components/SearchOutput';
import data from './data/data.json';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      qas: [],
      value: 'General questions',
      newUrl: "/",
      search: '',
      visibility: 'true',
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.handlenewUrl = this.handlenewUrl.bind(this);
    this.handleSearchOutput = this.handleSearchOutput.bind(this)

  }

  componentDidMount() {
    this.setState({ qas: data });
  }

  handleChange(value) {

    this.setState({ value });

  }

  changeUrl(url) {

    this.setState({ newUrl: url })

  }

  handlenewUrl() {
    this.setState({ newUrl: "/" })
    this.setState({ value: 'General questions' })
    this.setState({ visibility: "true" })
    this.setState({ search: '' })
  }

  handleSearchOutput(search, visibility) {
    this.setState({ search })
    this.setState({ visibility })

  }

  render() {


    const filterqas = this.state.qas.filter((qa) => { return qa.section === this.state.value });


    console.log("newUrl=", this.state.newUrl)

    const filterfaq = this.state.qas.filter((faq) => { return faq.url === this.state.newUrl });
    console.log("this is filterfaq=", filterfaq)
    // filter for search engine
    const filtersearch = this.state.qas.filter((qas) => { return qas.questionkey.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 })


    return (

      <div className="App">


        <Router>
          <div>
            {
              this.state.newUrl === "/" ? <Title /> : null
            }

            {
              this.state.newUrl === "/" && this.state.visibility === 'true' ? <Area areaCallback={this.handleChange} /> : null
            }
            {
              this.state.newUrl === "/" ? <Search {...this.state} searchCallback={this.handleSearchOutput} /> : null
            }
            {
              this.state.newUrl === "/" && this.state.search !== '' ? <Route path="/" render={() => filtersearch.map((qs) => (<SearchOutput key={qs.id} qs={qs} qaCallback={this.changeUrl} />))} /> : null
            }
            {

              this.state.newUrl === "/" && this.state.visibility === 'true' ? <Route path="/" render={() => filterqas.map((qa) => (<QA key={qa.id} qa={qa} qaCallback={this.changeUrl} />))} /> : null

            }
            {
              this.state.newUrl !== "/" ? <Route path="/" render={() => filterfaq.map((faq) => (<Faq key={faq.id} faq={faq} faqCallback={this.handlenewUrl} />))} /> : null
            }
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

