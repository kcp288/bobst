//array for holding printer objects
var printers = [];

/* ========== ========== ========== ==========
A printer object consists of relevant information for printers in our service
They contain the following elements:
	name: Long name of the printer
	nameShort: Abbreviated name, usually 2 letters for location and then nmber
	location: Long name of where the printer is located
	locationShort: 2 letter abbreviation for locations
		4S - 4th Street
		WP - Washington Place
		KC - Kimmel Center
		3A - 3rd Avenue
		RN - Resnet
	type: generally the model number of the printer, this will determine which function Javascript will use to parse the printer status page
	ip: IP address of the printer
========== ========== ========== ========== */

//Bobst Library
/*
printers.push({
	name:'LL2A-PRINTER',
	nameShort:'LL2A',
	location:'Lower Level 2',
	locationShort:'LL2',
	type:'HPM806',
	ip:'172.22.89.12'
});
printers.push({
	name:'LL2B-PRINTER',
	nameShort:'LL2B',
	location:'Lower Level 2',
	locationShort:'LL2',
	type:'HPM806',
	ip:'172.22.89.14'
});
printers.push({
	name:'LL2C-PRINTER',
	nameShort:'LL2C',
	location:'Lower Level 2',
	locationShort:'LL2',
	type:'HPM806',
	ip:'172.22.89.16'
});
*/
printers.push({
	name:'LL1A-PRINTER',
	nameShort:'LL1A',
	location:'Lower Level 1',
	locationShort:'LL1',
	type:'HP9050',
	ip:'172.22.88.238'
});
printers.push({
	name:'LL1B-PRINTER',
	nameShort:'LL1B',
	location:'Lower Level 1',
	locationShort:'LL1',
	type:'HP9050',
	ip:'172.22.88.239'
});
printers.push({
	name:'LL1C-PRINTER',
	nameShort:'LL1C',
	location:'Lower Level 1',
	locationShort:'LL1',
	type:'HP9050',
	ip:'172.22.88.246'
});
printers.push({
	name:'LL1-COLORPRINTER',
	nameShort:'LL1Color',
	location:'Lower Level 1',
	locationShort:'LL1',
	type:'HP4700',
	ip:'172.22.88.247'
});
printers.push({
	name:'1FL-A-PRINTER',
	nameShort:'1A',
	location:'1st Floor',
	locationShort:'1FL',
	type:'HP9050',
	ip:'172.22.88.236'
});

printers.push({
	name:'3FL-PRINTER',
	nameShort:'3FL',
	location:'3rd Floor',
	locationShort:'3FL',
	type:'HP4515',
	ip:'172.22.91.147'
});
printers.push({
	name:'4FL-PRINTER',
	nameShort:'4FL',
	location:'4th Floor',
	locationShort:'4FL',
	type:'HP4515',
	ip:'172.22.91.155'
});
printers.push({
	name:'5FL-PRINTER',
	nameShort:'5FL',
	location:'5th Floor',
	locationShort:'5FL',
	type:'HPM806',
	ip:'172.22.91.158'
});
printers.push({
	name:'5FL-COLORPRINTER',
	nameShort:'5FLColor',
	location:'5th Floor',
	locationShort:'5FL',
	type:'HP4700',
	ip:'172.22.91.156'
});
printers.push({
	name:'6FL-PRINTER',
	nameShort:'6FL',
	location:'6th Floor',
	locationShort:'6FL',
	type:'HP9050',
	ip:'172.22.91.148'
});
printers.push({
	name:'10FL-PRINTER',
	nameShort:'10FL',
	location:'10th Floor',
	locationShort:'10FL',
	type:'HPM806',
	ip:'172.22.91.58'
});
printers.push({
	name:'LL2A-PRINTER',
	nameShort:'LL2A',
	location:'LL2',
	locationShort:'LL2A',
	type:'HPM806',
	ip:'172.22.89.12'
});
printers.push({
	name:'LL2B-PRINTER',
	nameShort:'LL2B',
	location:'LL2',
	locationShort:'LL2B',
	type:'HPM806',
	ip:'172.22.89.14'
});
printers.push({
	name:'LL2C-PRINTER',
	nameShort:'LL2C',
	location:'LL2',
	locationShort:'LL2C',
	type:'HPM806',
	ip:'172.22.89.16'
});
printers.push({
	name:'1FL-B-PRINTER',
	nameShort:'1B',
	location:'1FL',
	locationShort:'1B',
	type:'HP9050',
	ip:'172.22.88.237'
});
printers.push({
	name:'LL1D-PRINTER',
	nameShort:'LL1D',
	location:'LL1',
	locationShort:'LL1D',
	type:'HPM806',
	ip:'172.22.88.202'
});
