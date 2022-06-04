(function (Prism) {

	Prism.languages.archetype = {
		'comment': /\/\*[\s\S]*?\*\//,
		'string': [
			{
				pattern: /"(?:\\.|[^\\\r\n"])*"/,
				greedy: true
			},
			{
				pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
				greedy: true
			}
		],
		'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*%\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
		'label': {
			pattern: /\B~\w+/,
			alias: 'function'
		},
    	'transfer-rule': {
			pattern: /transfer\s+(((?!to(\s+entry)?).)*)\s+to/,
			inside: {
				'builtin': {
					pattern: /\b(?:transfer|to|entry)\b/,
				},
				'constant': {
					pattern: /\b(?:now|balance|transferred|self|caller|sender|self_address|state|operations)\b/,
				}
			},
    	},
		'iter-rule': {
			pattern: /iter\s+(((?!to).)*)\s+to/,
			inside: {
				'control': {
					pattern: /\b(?:iter|from|to)\b/,
				}
			}
		},
    	'instr' : /\b(?:instr([0-9]|n))\b/,
    	'expr' : /\b(?:expr[0-9]|E([0-9]|n))\b/,
		'unkeyworded' : /%(?:.*)/,
    	'archetype': /\b(?:archetype)\b/,
    	'builtin': /\b(?:slice|mutez_to_nat|fold|get_entrypoint|reverse|require_entrypoint|exec_lambda|apply_lambda|get_some|is_some|left|right|some|none|isempty|length|put|get|transfer|call|emit|prepend|make_operation)\b/,
		'section': /\b(?:no transfer|state is|called by|sourced by|require|fail if|effect|with effect|from|to|when|otherwise|shadow|postcondition|fails)\b/,
    	'declaration': /\b(?:event|constant|archetype|enum|states|variable|asset|to big_map|to iterable_big_map|record|as|initial|identified by|initialized by)\b/,
    	'entry': /\b(?:entry|transition|function|getter|view)\b/,
    	'verif': /\b(?:invariant|specification)\b/,
    	'type': /\b(?:lambda|contract|big_map|map|set|option|list|int|nat|tez|string|rational|bytes|key|key_hash|address|sapling|signature|date|duration|bool|operation|aggregate|partition|asset_view|asset_key|asset_value|iterable_big_map)\b/,
    	'constant': /\b(?:now|balance|transferred|self|caller|source|self_address|state|operations)\b/,
		'control': /\b(?:assert|iter|begin|end|do|done|else|return|before|for|if|in|match|in|forall|added|removed|exists|then|the|from|to|while|with|InvalidCondition|InvalidCaller|NotFound|NatAssign|SliceError|DivByZero|OutOfBound)\b/,
		'decl': /\b(?:const|var|let some|let)\b/,
		'boolean': /\b(?:false|true)\b/,
    	'logic': /\b(?:and|or|=|not|asr|land|lor|lsl|lsr|lxor)\b/,
    	'asset': /\b(?:update_all|clear|count|sum|asc|desc|remove_if|remove_aggregate|remove|update|contains|remove_all|select|sort|head|nth|add|put|add_update|get)\b/,
		'access': /(?:\[|\]|\?|::)/,
    	'crypto': /\b(?:pack|unpack|open_chest)\b/,
    	'arith': /\b(?:mod|abs|min|max)\b/,
    	'fail': /\b(?:fail|do_require|do_fail_if)\b/,
		// Custom operators are allowed
		'function': /:=|\+=|\-=|[=<>@^|&+\-*\/$%!~][!$%&*+\-.\/:<=>?@^|~]*\b/,
		'punctuation': /[(){}|.,:;]|\b_\b/,
	};
}(Prism));
