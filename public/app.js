// Estrutura de dados
class Grafo {
	constructor() {
		this.vertices = {};
		this.arestas = {};
	}
	addVertice(nome) {
		if (!this.vertices[nome]) {
			this.vertices[nome] = [];
		}
	}
	addAresta(origem, destino) {
		if (this.vertices[origem] && this.vertices[destino]) {
			this.vertices[origem].push(destino);
			this.vertices[destino].push(origem);
		}
	}
}

// Inicialização
const grafo = new Grafo();
const conexoes = [];

grafo.addVertice('Hidreletrica');
grafo.addVertice('Subestacao1');
grafo.addVertice('Subestacao2');
grafo.addVertice('Subestacao3');
grafo.addVertice('TransformadorC1');
grafo.addVertice('TransformadorM1');
grafo.addVertice('TransformadorX1');
grafo.addVertice('TransformadorC2');
grafo.addVertice('TransformadorN1');
grafo.addVertice('TransformadorX2');
grafo.addVertice('TransformadorC3');
grafo.addVertice('TransformadorS1');
grafo.addVertice('TransformadorX3');
for (let i = 1; i <= 6; i++) grafo.addVertice('Casa' + i);

grafo.addAresta('Hidreletrica', 'Subestacao1');
grafo.addAresta('Hidreletrica', 'Subestacao2');
grafo.addAresta('Hidreletrica', 'Subestacao3');
grafo.addAresta('Subestacao1', 'TransformadorC1');
grafo.addAresta('Subestacao1', 'TransformadorM1');
grafo.addAresta('Subestacao1', 'TransformadorX1');
grafo.addAresta('Subestacao2', 'TransformadorC2');
grafo.addAresta('Subestacao2', 'TransformadorN1');
grafo.addAresta('Subestacao2', 'TransformadorX2');
grafo.addAresta('Subestacao3', 'TransformadorC3');
grafo.addAresta('Subestacao3', 'TransformadorS1');
grafo.addAresta('Subestacao3', 'TransformadorX3');
grafo.addAresta('TransformadorC1', 'Casa1');
grafo.addAresta('TransformadorC1', 'Casa2');
grafo.addAresta('TransformadorM1', 'Casa3');
grafo.addAresta('TransformadorM1', 'Casa4');
grafo.addAresta('TransformadorC2', 'Casa5');
grafo.addAresta('TransformadorC2', 'Casa6');

// Função de renderização SVG
function renderNetwork() {
	const svg = document.getElementById('svgNetwork');
	while (svg.firstChild) svg.removeChild(svg.firstChild);

	// Fundo
	// Fundo sólido moderno
	// Fundo branco com campo verde e céu azul suave
	const sky = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	sky.setAttribute('x', 0);
	sky.setAttribute('y', 0);
	sky.setAttribute('width', 800);
	sky.setAttribute('height', 200);
	sky.setAttribute('fill', '#e3f2fd'); // azul suave
	svg.appendChild(sky);
	const field = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	field.setAttribute('x', 0);
	field.setAttribute('y', 200);
	field.setAttribute('width', 800);
	field.setAttribute('height', 300);
	field.setAttribute('fill', '#c8e6c9'); // verde suave
	svg.appendChild(field);

	// Estradas com preenchimento suave
	const roadH = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	roadH.setAttribute('x', 0);
	roadH.setAttribute('y', 400);
	roadH.setAttribute('width', 800);
	roadH.setAttribute('height', 40);
	roadH.setAttribute('fill', '#bdbdbd');
	roadH.setAttribute('stroke', '#222');
	roadH.setAttribute('stroke-width', '2');
	svg.appendChild(roadH);
	for (let i = 0; i < 8; i++) {
		const stripeH = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		stripeH.setAttribute('x', 50 + i * 100);
		stripeH.setAttribute('y', 418);
		stripeH.setAttribute('width', 60);
		stripeH.setAttribute('height', 4);
		stripeH.setAttribute('fill', '#fff');
		stripeH.setAttribute('stroke', '#888');
		stripeH.setAttribute('stroke-width', '1');
		svg.appendChild(stripeH);
	}
	const verticalRoads = [180, 400, 620];
	verticalRoads.forEach(x => {
		const roadV = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		roadV.setAttribute('x', x - 20);
		roadV.setAttribute('y', 200);
		roadV.setAttribute('width', 40);
		roadV.setAttribute('height', 200);
		roadV.setAttribute('fill', '#bdbdbd');
		roadV.setAttribute('stroke', '#222');
		roadV.setAttribute('stroke-width', '2');
		svg.appendChild(roadV);
		for (let j = 0; j < 5; j++) {
			const stripeV = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			stripeV.setAttribute('x', x - 4);
			stripeV.setAttribute('y', 220 + j * 40);
			stripeV.setAttribute('width', 8);
			stripeV.setAttribute('height', 24);
			stripeV.setAttribute('fill', '#fff');
			stripeV.setAttribute('stroke', '#888');
			stripeV.setAttribute('stroke-width', '1');
			svg.appendChild(stripeV);
		}
	});

	// Árvores com cor suave
	const treeData = [
		{cx: 60, cy: 420}, {cx: 180, cy: 440}, {cx: 300, cy: 430},
		{cx: 500, cy: 440}, {cx: 620, cy: 420}, {cx: 740, cy: 440}
	];
	treeData.forEach(t => {
		const treeTop = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
		treeTop.setAttribute('cx', t.cx);
		treeTop.setAttribute('cy', t.cy);
		treeTop.setAttribute('rx', 18);
		treeTop.setAttribute('ry', 14);
		treeTop.setAttribute('fill', '#81c784');
		treeTop.setAttribute('stroke', '#388e3c');
		treeTop.setAttribute('stroke-width', '2');
		svg.appendChild(treeTop);
		const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		trunk.setAttribute('x', t.cx - 4);
		trunk.setAttribute('y', t.cy + 10);
		trunk.setAttribute('width', 8);
		trunk.setAttribute('height', 16);
		trunk.setAttribute('fill', '#a1887f');
		trunk.setAttribute('stroke', '#8d6e63');
		trunk.setAttribute('stroke-width', '1.5');
		svg.appendChild(trunk);
	});

	// Estilo dos nós com cor suave
	const nodeStyle = {
		geradora: { color: '#388e3c', border: '#1b5e20', text: '#fff', r: 28, shadow: '#2e7d32' },
		subestacao: { color: '#ffb300', border: '#f57c00', text: '#fff', r: 26, shadow: '#fbc02d' },
		transformador: { color: '#1976d2', border: '#0d47a1', text: '#fff', r: 24, shadow: '#1976d2' },
		consumidor: { color: '#43a047', border: '#1b5e20', text: '#fff', r: 20, shadow: '#388e3c' }
	};
	const positions = {
		'Hidreletrica': {x: 400, y: 60, tipo: 'geradora', nome: 'Hidrelétrica', id: 1},
		'Subestacao1': {x: 200, y: 160, tipo: 'subestacao', nome: 'Subestação Centro', id: 3},
		'Subestacao2': {x: 400, y: 160, tipo: 'subestacao', nome: 'Subestação Norte', id: 4},
		'Subestacao3': {x: 600, y: 160, tipo: 'subestacao', nome: 'Subestação Sul', id: 5},
		'TransformadorC1': {x: 200, y: 220, tipo: 'transformador', nome: 'Transformador C1', id: 6},
		'TransformadorM1': {x: 200, y: 260, tipo: 'transformador', nome: 'Transformador M1', id: 10},
		'TransformadorX1': {x: 200, y: 300, tipo: 'transformador', nome: 'Transformador X1', id: 18},
		'TransformadorC2': {x: 400, y: 220, tipo: 'transformador', nome: 'Transformador C2', id: 7},
		'TransformadorN1': {x: 400, y: 260, tipo: 'transformador', nome: 'Transformador N1', id: 11},
		'TransformadorX2': {x: 400, y: 300, tipo: 'transformador', nome: 'Transformador X2', id: 19},
		'TransformadorC3': {x: 600, y: 220, tipo: 'transformador', nome: 'Transformador C3', id: 8},
		'TransformadorS1': {x: 600, y: 260, tipo: 'transformador', nome: 'Transformador S1', id: 13},
		'TransformadorX3': {x: 600, y: 300, tipo: 'transformador', nome: 'Transformador X3', id: 20},
	};
	// Arestas
	// Fios realistas com curvas e terminais
	for (let v in grafo.vertices) {
		grafo.vertices[v].forEach(dest => {
			if (positions[v] && positions[dest]) {
				const tipoLinha = (positions[v].tipo === 'geradora' || positions[dest].tipo === 'subestacao') ? 'alta' : 'media';
				const x1 = positions[v].x;
				const y1 = positions[v].y;
				const x2 = positions[dest].x;
				const y2 = positions[dest].y;
				// Curva suave (SVG path)
				const mx = (x1 + x2) / 2;
				const my = (y1 + y2) / 2 - 30; // elevação para curva
				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				path.setAttribute('d', `M${x1},${y1} Q${mx},${my} ${x2},${y2}`);
				path.setAttribute('stroke', tipoLinha === 'alta' ? '#222' : '#888');
				path.setAttribute('stroke-width', tipoLinha === 'alta' ? '5' : '3');
				path.setAttribute('fill', 'none');
				path.setAttribute('opacity', '0.95');
				path.setAttribute('filter', 'drop-shadow(0px 1px 2px #888)');
				svg.appendChild(path);

				// Adiciona postes ao longo do fio
				const numPostes = 3;
				for (let p = 1; p < numPostes; p++) {
					const t = p / numPostes;
					const px = (1 - t) * x1 + t * x2;
					const py = (1 - t) * y1 + t * y2 - 20;
					const poste = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
					poste.setAttribute('x', px - 4);
					poste.setAttribute('y', py);
					poste.setAttribute('width', 8);
					poste.setAttribute('height', 32);
					poste.setAttribute('fill', '#bdbdbd');
					poste.setAttribute('stroke', '#616161');
					poste.setAttribute('stroke-width', '2');
					poste.setAttribute('filter', 'drop-shadow(0px 2px 4px #888)');
					svg.appendChild(poste);
					// Isolador
					const isolador = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
					isolador.setAttribute('cx', px);
					isolador.setAttribute('cy', py);
					isolador.setAttribute('rx', 6);
					isolador.setAttribute('ry', 3);
					isolador.setAttribute('fill', tipoLinha === 'alta' ? '#ffeb3b' : '#90caf9');
					isolador.setAttribute('opacity', '0.8');
					svg.appendChild(isolador);
				}

				// Terminais
				[ [x1, y1], [x2, y2] ].forEach(([x, y]) => {
					const terminal = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
					terminal.setAttribute('cx', x);
					terminal.setAttribute('cy', y);
					terminal.setAttribute('r', tipoLinha === 'alta' ? 6 : 4);
					terminal.setAttribute('fill', '#fff');
					terminal.setAttribute('stroke', tipoLinha === 'alta' ? '#222' : '#888');
					terminal.setAttribute('stroke-width', '2');
					svg.appendChild(terminal);
				});
			}
		});
	}
	// Nós
	Object.keys(positions).forEach(v => {
		const pos = positions[v];
		const style = nodeStyle[pos.tipo];
		let iconGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		iconGroup.setAttribute('transform', `translate(${pos.x},${pos.y}) scale(0.7)`);
		iconGroup.setAttribute('filter', `drop-shadow(0px 2px 6px ${style.shadow})`);
		if (pos.tipo === 'hidreletrica') {
			// Ícone realista de hidrelétrica: barragem, água e casa de máquinas
			// Centraliza o ícone acima do nó principal
			let hidroGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			hidroGroup.setAttribute('transform', 'translate(0,-48) scale(1.15)');
			// Barragem
			const dam = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			dam.setAttribute('x', -22);
			dam.setAttribute('y', -10);
			dam.setAttribute('width', 44);
			dam.setAttribute('height', 20);
			dam.setAttribute('rx', 10);
			dam.setAttribute('fill', '#b0bec5');
			dam.setAttribute('stroke', '#263238');
			dam.setAttribute('stroke-width', '2.5');
			hidroGroup.appendChild(dam);
			// Água
			const water = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
			water.setAttribute('cx', 0);
			water.setAttribute('cy', 14);
			water.setAttribute('rx', 22);
			water.setAttribute('ry', 8);
			water.setAttribute('fill', '#2196f3');
			water.setAttribute('opacity', '0.85');
			water.setAttribute('stroke', '#1565c0');
			water.setAttribute('stroke-width', '1.5');
			hidroGroup.appendChild(water);
			// Casa de máquinas
			const house = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			house.setAttribute('x', -10);
			house.setAttribute('y', -20);
			house.setAttribute('width', 20);
			house.setAttribute('height', 10);
			house.setAttribute('fill', '#8bc34a');
			house.setAttribute('stroke', '#33691e');
			house.setAttribute('stroke-width', '2');
			hidroGroup.appendChild(house);
			// Porta da casa de máquinas
			const door = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			door.setAttribute('x', -3);
			door.setAttribute('y', -14);
			door.setAttribute('width', 6);
			door.setAttribute('height', 6);
			door.setAttribute('fill', '#fffde7');
			door.setAttribute('stroke', '#bdb76b');
			door.setAttribute('stroke-width', '1');
			hidroGroup.appendChild(door);
			// Adiciona o grupo ao ícone principal
			iconGroup.appendChild(hidroGroup);
		} else if (pos.tipo === 'subestacao') {
			// Ícone subestação: torre com grade e símbolo elétrico
			const tower = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			tower.setAttribute('x', -14);
			tower.setAttribute('y', -16);
			tower.setAttribute('width', 28);
			tower.setAttribute('height', 32);
			tower.setAttribute('fill', style.color);
			tower.setAttribute('stroke', style.border);
			tower.setAttribute('stroke-width', '2');
			iconGroup.appendChild(tower);
			// Grade
			for (let i = -10; i <= 10; i += 10) {
				const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				bar.setAttribute('x', i);
				bar.setAttribute('y', -16);
				bar.setAttribute('width', 2);
				bar.setAttribute('height', 32);
				bar.setAttribute('fill', '#fff');
				bar.setAttribute('opacity', '0.7');
				iconGroup.appendChild(bar);
			}
			// Símbolo elétrico (raio)
			const bolt = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			bolt.setAttribute('points', '-5,0 0,12 4,4 8,12 2,-2 7,-2');
			bolt.setAttribute('fill', '#fff');
			bolt.setAttribute('opacity', '0.9');
			iconGroup.appendChild(bolt);
		} else if (pos.tipo === 'subestacao') {
			const hex = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			hex.setAttribute('points', '0,-16 14,-8 14,8 0,16 -14,8 -14,-8');
			hex.setAttribute('fill', style.color);
			hex.setAttribute('stroke', style.border);
			hex.setAttribute('stroke-width', '2');
			iconGroup.appendChild(hex);
			const bolt = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			bolt.setAttribute('points', '-5,-4 0,7 3,2 7,7 1,-2 5,-2');
			bolt.setAttribute('fill', '#fff');
			bolt.setAttribute('stroke', '#888');
			bolt.setAttribute('stroke-width', '1.5');
			iconGroup.appendChild(bolt);
		} else if (pos.tipo === 'transformador') {
			const base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			base.setAttribute('r', style.r - 4);
			base.setAttribute('fill', style.color);
			base.setAttribute('stroke', style.border);
			base.setAttribute('stroke-width', '2');
			iconGroup.appendChild(base);
			for (let i = -6; i <= 6; i += 6) {
				const coil = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
				coil.setAttribute('cx', i);
				coil.setAttribute('cy', 0);
				coil.setAttribute('rx', 3);
				coil.setAttribute('ry', 7);
				coil.setAttribute('fill', '#fff');
				coil.setAttribute('stroke', '#888');
				coil.setAttribute('stroke-width', '1.2');
				iconGroup.appendChild(coil);
			}
		}
		svg.appendChild(iconGroup);
		// Exibir nome e ID apenas para geradora e subestacao
		if (pos.tipo === 'geradora' || pos.tipo === 'subestacao') {
			const idtxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			idtxt.setAttribute('x', pos.x);
			idtxt.setAttribute('y', pos.y - 8);
			idtxt.setAttribute('text-anchor', 'middle');
			idtxt.setAttribute('font-size', '15');
			idtxt.setAttribute('font-family', 'Segoe UI, Arial, sans-serif');
			idtxt.setAttribute('font-weight', 'bold');
			idtxt.setAttribute('fill', '#222');
			idtxt.setAttribute('opacity', '1');
			idtxt.textContent = 'ID: ' + pos.id;
			svg.appendChild(idtxt);
			const nametxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			nametxt.setAttribute('x', pos.x);
			nametxt.setAttribute('y', pos.y + style.r + 18);
			nametxt.setAttribute('text-anchor', 'middle');
			nametxt.setAttribute('font-size', '15');
			nametxt.setAttribute('font-family', 'Segoe UI, Arial, sans-serif');
			nametxt.setAttribute('font-weight', 'bold');
			nametxt.setAttribute('fill', '#222');
			nametxt.setAttribute('opacity', '1');
			nametxt.textContent = pos.nome;
			svg.appendChild(nametxt);
		}
		// Não exibir nome/ID para transformador
	});
	// Casas conectadas
	conexoes.forEach((con, idx) => {
		const trafoPos = positions[con.transformador];
		// Posição lateral: esquerda/direita alternando
		const offsetX = (idx % 2 === 0) ? -30 : 30;
		const casaX = trafoPos.x + offsetX;
		const casaY = trafoPos.y;
		// Linha de conexão
		const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttribute('x1', trafoPos.x);
		line.setAttribute('y1', trafoPos.y);
		line.setAttribute('x2', casaX);
		line.setAttribute('y2', casaY);
		line.setAttribute('stroke', '#222');
		line.setAttribute('stroke-width', '2');
		line.setAttribute('opacity', '0.85');
		svg.appendChild(line);
		// Casa rubro-negro
		let casaGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		casaGroup.setAttribute('transform', `translate(${casaX},${casaY}) scale(0.7)`);
		// Base da casa
		const base = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		base.setAttribute('x', -10);
		base.setAttribute('y', -8);
		base.setAttribute('width', 20);
		base.setAttribute('height', 14);
		// Alterna cor: preta se idx par, vermelha se idx ímpar
		base.setAttribute('fill', idx % 2 === 0 ? '#222' : '#d32f2f');
		base.setAttribute('stroke', '#333');
		base.setAttribute('stroke-width', '1.2');
		casaGroup.appendChild(base);
		// Telhado
		const roof = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		roof.setAttribute('points', '-12,-8 0,-20 12,-8');
		roof.setAttribute('fill', idx % 2 === 0 ? '#444' : '#b71c1c');
		roof.setAttribute('stroke', '#222');
		roof.setAttribute('stroke-width', '1.2');
		casaGroup.appendChild(roof);
		// Nome do consumidor
		const nome = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		nome.setAttribute('x', 0);
		nome.setAttribute('y', 24);
		nome.setAttribute('text-anchor', 'middle');
		nome.setAttribute('font-size', '13');
		nome.setAttribute('fill', idx % 2 === 0 ? '#fff' : '#222');
		nome.textContent = con.consumidor;
		casaGroup.appendChild(nome);
		svg.appendChild(casaGroup);
	});
	// Legenda
	const legendY = 480;
	const legendX = 40;
	const legend = [
		{ cor: nodeStyle.geradora.color, texto: 'Geradoras' },
		{ cor: nodeStyle.subestacao.color, texto: 'Subestações' },
		{ cor: nodeStyle.transformador.color, texto: 'Transformadores' },
		{ cor: nodeStyle.consumidor.color, texto: 'Consumidores' },
		{ cor: '#222', texto: 'Alta Tensão' },
		{ cor: '#888', texto: 'Média Tensão' },
		{ cor: '#bbb', texto: 'Baixa Tensão' }
	];
	legend.forEach((l, i) => {
		const lx = legendX + i * 120;
		const ly = legendY;
		const circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circ.setAttribute('cx', lx);
		circ.setAttribute('cy', ly);
		circ.setAttribute('r', 8);
		circ.setAttribute('fill', l.cor);
		circ.setAttribute('stroke', '#333');
		circ.setAttribute('stroke-width', '1');
		svg.appendChild(circ);
		const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		txt.setAttribute('x', lx + 16);
		txt.setAttribute('y', ly + 4);
		txt.setAttribute('font-size', '13');
		txt.setAttribute('fill', '#333');
		txt.textContent = l.texto;
		svg.appendChild(txt);
	});
}

// Função para atualizar lista de consumidores
function atualizarListaConsumidores() {
    const lista = document.getElementById('listaConsumidores');
    if (!lista) return;
    lista.innerHTML = '<h2>Consumidores cadastrados</h2>';
    conexoes.forEach((c, idx) => {
        const div = document.createElement('div');
        div.className = 'consumer-item';
        div.innerHTML = `<strong>${c.consumidor}</strong> <span style='color:#1976d2'>Transformador: ${c.transformador}</span>`;
        lista.appendChild(div);
    });
}

// Cadastro de consumidor via formulário
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastro');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        // Alterna entre transformadores C1, C2, C3
        const transformadores = ['TransformadorC1', 'TransformadorC2', 'TransformadorC3'];
        const idx = conexoes.length % transformadores.length;
        const transformador = transformadores[idx];
        // Adiciona casa ao grafo e à lista de conexões
        const casaNome = 'Casa' + (conexoes.length + 1);
        grafo.addVertice(casaNome);
        grafo.addAresta(transformador, casaNome);
        conexoes.push({ consumidor: nome, transformador });
        atualizarListaConsumidores();
        renderNetwork();
        form.reset();
    });
    atualizarListaConsumidores();
    renderNetwork();
});

renderNetwork();
