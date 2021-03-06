// @flow
import React, { Component, Element } from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import styles from './Structure.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Structure extends Component {
  props: {
    json: Object
  }

  schema: string;
  contentVersion: string;
  parameters: any;
  variables: any;
  resources: any;
  outputs: any;

  displayVariables(): Element<any>[] {
    const variables = [];
    Object.keys(this.variables).forEach((k) => {
      variables.push(<ListItem className={styles.structureItem} key={k}>{k}</ListItem>);
    });

    return variables;
  }

  displayParameters(): Element<any>[] {
    const parameters = [];
    Object.keys(this.parameters).forEach((p) => {
      parameters.push(<ListItem className={styles.structureItem} key={p}>{p}</ListItem>);
    });

    return parameters;
  }

  displayOutputs(): Element<any>[] {
    const outputs = [];
    Object.keys(this.outputs).forEach((o) => {
      outputs.push(<ListItem className={styles.structureItem} key={o}>{o}</ListItem>);
    });

    return outputs;
  }

  parseJson(): void {
    this.schema = this.props.json.$schema;
    this.contentVersion = this.props.json.contentVersion;
    this.parameters = this.props.json.parameters || {};
    this.variables = this.props.json.variables || {};
    this.resources = this.props.json.resources;
    this.outputs = this.props.json.outputs || {};
  }

  render() {
    this.parseJson();

    return (
      <div className={styles.structure}>
        <List>
          <Subheader>Structure</Subheader>
          <ListItem className={styles.structureHeader} primaryText="Schema" initiallyOpen={false} nestedItems={[<ListItem className={styles.structureItem} key={1} primaryText={this.schema} />]} />
          <ListItem className={styles.structureHeader} primaryText="Content Version" initiallyOpen={false} nestedItems={[<ListItem className={styles.structureItem} key={1} primaryText={this.contentVersion} />]} />
          <ListItem className={styles.structureHeader} primaryText="Variables" initiallyOpen={false} nestedItems={this.displayVariables()} />
          <ListItem className={styles.structureHeader} primaryText="Parameters" initiallyOpen={false} nestedItems={this.displayParameters()} />
          <ListItem className={styles.structureHeader} primaryText="Outputs" initiallyOpen={false} nestedItems={this.displayOutputs()} />
        </List>
      </div>);
  }
}
