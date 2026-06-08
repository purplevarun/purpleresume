import { useEffect, useState } from "react";
import {
	DEFAULT_DATA,
	DEFAULT_SETTINGS,
	EMPTY_EDU,
	EMPTY_EXP,
	EMPTY_PROJ,
} from "../data/defaults";

const LS_DATA_KEY = "resumeforge_data";
const LS_SETTINGS_KEY = "resumeforge_settings";

function loadFromStorage(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}

function saveToStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {
		// storage full or unavailable — silently ignore
	}
}

export function useResumeData() {
	const [data, setData] = useState(() =>
		loadFromStorage(LS_DATA_KEY, DEFAULT_DATA),
	);
	const [settings, setSettings] = useState(() =>
		loadFromStorage(LS_SETTINGS_KEY, DEFAULT_SETTINGS),
	);

	// Persist data to localStorage on every change
	useEffect(() => {
		saveToStorage(LS_DATA_KEY, data);
	}, [data]);

	// Persist settings to localStorage on every change
	useEffect(() => {
		saveToStorage(LS_SETTINGS_KEY, settings);
	}, [settings]);

	const updateField = (field) => (val) =>
		setData((d) => ({ ...d, [field]: val }));

	const updateSetting = (key) => (val) =>
		setSettings((s) => ({ ...s, [key]: val }));

	const resetAll = () => {
		setData(DEFAULT_DATA);
		setSettings(DEFAULT_SETTINGS);
	};

	// Experience
	const addExp = () =>
		setData((d) => ({
			...d,
			experience: [...d.experience, { ...EMPTY_EXP, id: Date.now() }],
		}));
	const updateExp = (id, newExp) =>
		setData((d) => ({
			...d,
			experience: d.experience.map((e) => (e.id === id ? newExp : e)),
		}));
	const removeExp = (id) =>
		setData((d) => ({
			...d,
			experience: d.experience.filter((e) => e.id !== id),
		}));

	// Education
	const addEdu = () =>
		setData((d) => ({
			...d,
			education: [...d.education, { ...EMPTY_EDU, id: Date.now() }],
		}));
	const updateEdu = (id, newEdu) =>
		setData((d) => ({
			...d,
			education: d.education.map((e) => (e.id === id ? newEdu : e)),
		}));
	const removeEdu = (id) =>
		setData((d) => ({
			...d,
			education: d.education.filter((e) => e.id !== id),
		}));

	// Projects
	const addProj = () =>
		setData((d) => ({
			...d,
			projects: [...d.projects, { ...EMPTY_PROJ, id: Date.now() }],
		}));
	const updateProj = (id, newP) =>
		setData((d) => ({
			...d,
			projects: d.projects.map((p) => (p.id === id ? newP : p)),
		}));
	const removeProj = (id) =>
		setData((d) => ({
			...d,
			projects: d.projects.filter((p) => p.id !== id),
		}));

	return {
		data,
		settings,
		updateField,
		updateSetting,
		resetAll,
		addExp,
		updateExp,
		removeExp,
		addEdu,
		updateEdu,
		removeEdu,
		addProj,
		updateProj,
		removeProj,
	};
}
