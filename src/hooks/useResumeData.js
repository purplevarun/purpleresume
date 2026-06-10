import { useEffect, useState } from "react";
import {
	DEFAULT_DATA,
	DEFAULT_SECTION_ORDER,
	DEFAULT_SECTION_VISIBLE,
	DEFAULT_SETTINGS,
	EMPTY_EDU,
	EMPTY_EXP,
	EMPTY_PROJ,
} from "../data/defaults";

const LS_DATA_KEY = "purpleresume_data";
const LS_SETTINGS_KEY = "purpleresume_settings";

function load(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}

function save(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}

// Merge loaded settings with defaults so new keys are always present
function mergeSettings(loaded) {
	return {
		...DEFAULT_SETTINGS,
		...loaded,
		sectionOrder: loaded?.sectionOrder ?? DEFAULT_SECTION_ORDER,
		sectionVisible: {
			...DEFAULT_SECTION_VISIBLE,
			...(loaded?.sectionVisible ?? {}),
		},
	};
}

export function useResumeData() {
	const [data, setData] = useState(() => load(LS_DATA_KEY, DEFAULT_DATA));
	const [settings, setSettings] = useState(() =>
		mergeSettings(load(LS_SETTINGS_KEY, DEFAULT_SETTINGS)),
	);

	useEffect(() => {
		save(LS_DATA_KEY, data);
	}, [data]);
	useEffect(() => {
		save(LS_SETTINGS_KEY, settings);
	}, [settings]);

	const updateField = (field) => (val) =>
		setData((d) => ({ ...d, [field]: val }));
	const updateSetting = (key) => (val) =>
		setSettings((s) => ({ ...s, [key]: val }));

	const resetAll = () => {
		setData(DEFAULT_DATA);
		setSettings(DEFAULT_SETTINGS);
	};

	// ── Section ordering ──────────────────────────────────────────────────────
	const moveSectionUp = (id) => {
		setSettings((s) => {
			const arr = [...s.sectionOrder];
			const i = arr.indexOf(id);
			if (i <= 0) return s;
			[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
			return { ...s, sectionOrder: arr };
		});
	};
	const moveSectionDown = (id) => {
		setSettings((s) => {
			const arr = [...s.sectionOrder];
			const i = arr.indexOf(id);
			if (i === -1 || i >= arr.length - 1) return s;
			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			return { ...s, sectionOrder: arr };
		});
	};
	const toggleSection = (id) => {
		setSettings((s) => ({
			...s,
			sectionVisible: {
				...s.sectionVisible,
				[id]: !s.sectionVisible[id],
			},
		}));
	};

	// ── Experience ────────────────────────────────────────────────────────────
	const addExp = () =>
		setData((d) => ({
			...d,
			experience: [...d.experience, { ...EMPTY_EXP, id: Date.now() }],
		}));
	const updateExp = (id, v) =>
		setData((d) => ({
			...d,
			experience: d.experience.map((e) => (e.id === id ? v : e)),
		}));
	const removeExp = (id) =>
		setData((d) => ({
			...d,
			experience: d.experience.filter((e) => e.id !== id),
		}));

	// ── Education ─────────────────────────────────────────────────────────────
	const addEdu = () =>
		setData((d) => ({
			...d,
			education: [...d.education, { ...EMPTY_EDU, id: Date.now() }],
		}));
	const updateEdu = (id, v) =>
		setData((d) => ({
			...d,
			education: d.education.map((e) => (e.id === id ? v : e)),
		}));
	const removeEdu = (id) =>
		setData((d) => ({
			...d,
			education: d.education.filter((e) => e.id !== id),
		}));

	// ── Projects ──────────────────────────────────────────────────────────────
	const addProj = () =>
		setData((d) => ({
			...d,
			projects: [...d.projects, { ...EMPTY_PROJ, id: Date.now() }],
		}));
	const updateProj = (id, v) =>
		setData((d) => ({
			...d,
			projects: d.projects.map((p) => (p.id === id ? v : p)),
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
		moveSectionUp,
		moveSectionDown,
		toggleSection,
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
