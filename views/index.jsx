var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
	render() {
		return (
			<DefaultLayout title={this.props.title}>
				<div>Hello {this.props.name}</div>
				<nav class="main-menu" role="navigation">
					<a class="main-menu__item" href="/projects">Проекты</a>
					<a class="main-menu__item" href="/global">Глобальные конфигурации</a>
					<a class="main-menu__item" href="/users">Пользователи</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = HelloMessage;