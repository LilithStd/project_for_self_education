import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";



const App = () => {
	const { theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={''}>
				<Navbar/>
				<div className="content-page">
					<Sidebar/>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	);
};

export default App;