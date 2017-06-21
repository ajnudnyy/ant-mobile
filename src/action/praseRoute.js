//解析路由
export function praseRoute(pathname) {
	var start = pathname.indexOf(':');
	var locname = pathname.substring(start + 1);
	var start2 = locname.indexOf('/');
	if (start2 > 0) locname = pathname.substring(start2 + 1);
	if (locname) return locname;
}