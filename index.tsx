import React, { Component } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  queryClient = new QueryClient();
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <QueryClientProvider client={this.queryClient}>
        <div>
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)</p>
        </div>
      </QueryClientProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
