import {Component} from 'react';

interface P {}

interface S {}

export default class ArticleController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }
}
