// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  bool _Some;
  }
struct T2 {
  address payable elem0;
  }
struct T3 {
  uint256 elem0;
  }
struct T4 {
  address payable elem0;
  uint256 elem1;
  }
enum _enum_T6 {Admin_addAdmin0_98, Admin_deposit0_98, Admin_editUserReward0_98, Admin_endContractAndTransfer0_98, Admin_revokeAdmin0_98, Admin_setReward0_98, User_claim0_98, User_claimAll0_98, User_optin0_98}
struct T6 {
  _enum_T6 which;
  T2 _Admin_addAdmin0_98;
  T3 _Admin_deposit0_98;
  T4 _Admin_editUserReward0_98;
  bool _Admin_endContractAndTransfer0_98;
  T2 _Admin_revokeAdmin0_98;
  T4 _Admin_setReward0_98;
  T3 _User_claim0_98;
  bool _User_claimAll0_98;
  bool _User_optin0_98;
  }
struct T7 {
  uint256 elem0;
  T6 elem1;
  }
struct T8 {
  uint256 _i;
  uint256 _scale;
  }
struct T9 {
  T8 _i;
  bool _sign;
  }
struct T10 {
  address payable v4042;
  bytes30 v4043;
  uint256 v4066;
  uint256 v4087;
  bool v4088;
  T9 v4089;
  uint256 v4090;
  uint256 v4091;
  uint256 v4092;
  uint256 v4093;
  }
struct T11 {
  uint256 elem0;
  bytes30 elem1;
  }
struct T12 {
  uint256 _bal;
  bool _keepGoing;
  T9 _percent;
  uint256 _total_amount_claimed;
  uint256 _total_rewards_allcoated;
  uint256 _total_users_claim;
  uint256 _usersNo;
  }
struct T13 {
  address payable elem0;
  bytes30 elem1;
  T12 elem2;
  uint256 elem3;
  uint256 elem4;
  }
struct T14 {
  address payable addr;
  uint256 amount;
  bytes30 projectName;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event _reach_e0(address _who, T11 _a);
  event _reach_e2(address _who, T7 _a);
  event _reach_oe_v4393(bool v0);
  event _reach_oe_v4849(bool v0);
  event _reach_oe_v5311(bool v0);
  event _reach_oe_v5762(bool v0);
  event _reach_oe_v6214(bool v0);
  event _reach_oe_v6677(bool v0);
  event _reach_oe_v7183(bool v0);
  event _reach_oe_v7677(bool v0);
  event _reach_oe_v7697(bool v0);
  event _reach_oe_v7722(bool v0);
  event _reach_oe_v8177(bool v0);
  event claimed(T14 v0);
  event insufficient(uint256 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (address => T1) _reachm_2;
  function __reachm_2Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_2[addr].which == _enum_T1.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (address => T1) _reachm_3;
  function __reachm_3Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_3[addr].which == _enum_T1.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_3Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Admin_addAdmin;
    bool _reachr_Admin_deposit;
    bool _reachr_Admin_editUserReward;
    bool _reachr_Admin_endContractAndTransfer;
    bool _reachr_Admin_revokeAdmin;
    bool _reachr_Admin_setReward;
    bool _reachr_Info_Admins;
    uint256 _reachr_Info_balance;
    bool _reachr_Info_opted;
    uint256 _reachr_Info_rewards;
    uint256 _reachr_Info_totalAllocatedFunds;
    uint256 _reachr_Info_totalAmountClaimed;
    uint256 _reachr_Info_totalClaimed;
    uint256 _reachr_Info_totalOptedIn;
    bool _reachr_User_claim;
    bool _reachr_User_claimAll;
    bool _reachr_User_optin;
    }
  struct _F12400 {
    T2 v12344;
    T6 v12345;
    }
  function _reacha_Admin_addAdmin(address payable _a, Memory memory _Memory) internal  {
    _F12400 memory _f;
    _f.v12344.elem0 = _a;
    _f.v12345.which = _enum_T6.Admin_addAdmin0_98;
    _f.v12345._Admin_addAdmin0_98 = _f.v12344;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12345;
    _reachi_2(_ja, _Memory);
    }
  struct _F12401 {
    T3 v12350;
    T6 v12351;
    }
  function _reacha_Admin_deposit(uint256 _a, Memory memory _Memory) internal  {
    _F12401 memory _f;
    _f.v12350.elem0 = _a;
    _f.v12351.which = _enum_T6.Admin_deposit0_98;
    _f.v12351._Admin_deposit0_98 = _f.v12350;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12351;
    _reachi_2(_ja, _Memory);
    }
  struct _F12402 {
    T4 v12357;
    T6 v12358;
    }
  function _reacha_Admin_editUserReward(T4 memory _a, Memory memory _Memory) internal  {
    _F12402 memory _f;
    _f.v12357.elem0 = _a.elem0;
    _f.v12357.elem1 = _a.elem1;
    _f.v12358.which = _enum_T6.Admin_editUserReward0_98;
    _f.v12358._Admin_editUserReward0_98 = _f.v12357;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12358;
    _reachi_2(_ja, _Memory);
    }
  struct _F12403 {
    bool v12363;
    T6 v12364;
    }
  function _reacha_Admin_endContractAndTransfer(bool _a, Memory memory _Memory) internal  {
    _F12403 memory _f;
    _f.v12364.which = _enum_T6.Admin_endContractAndTransfer0_98;
    _f.v12364._Admin_endContractAndTransfer0_98 = _f.v12363;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12364;
    _reachi_2(_ja, _Memory);
    }
  struct _F12404 {
    T2 v12368;
    T6 v12369;
    }
  function _reacha_Admin_revokeAdmin(address payable _a, Memory memory _Memory) internal  {
    _F12404 memory _f;
    _f.v12368.elem0 = _a;
    _f.v12369.which = _enum_T6.Admin_revokeAdmin0_98;
    _f.v12369._Admin_revokeAdmin0_98 = _f.v12368;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12369;
    _reachi_2(_ja, _Memory);
    }
  struct _F12405 {
    T4 v12375;
    T6 v12376;
    }
  function _reacha_Admin_setReward(T4 memory _a, Memory memory _Memory) internal  {
    _F12405 memory _f;
    _f.v12375.elem0 = _a.elem0;
    _f.v12375.elem1 = _a.elem1;
    _f.v12376.which = _enum_T6.Admin_setReward0_98;
    _f.v12376._Admin_setReward0_98 = _f.v12375;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12376;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_Info_Admins(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(7) /*'(./index.rsh:36:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_Admins = ((uint256((__reachm_1Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_balance(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(8) /*'(./index.rsh:42:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_balance = _svs.v4066;
    }
  function _reacha_Info_opted(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(9) /*'(./index.rsh:37:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_opted = ((uint256((__reachm_3Ref((_a))).which)) == uint256(1));
    }
  function _reacha_Info_rewards(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(10) /*'(./index.rsh:35:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_rewards = (((__reachm_0Ref((_a))).which == _enum_T0.Some ? (__reachm_0Ref((_a)))._Some : uint256(0)));
    }
  function _reacha_Info_totalAllocatedFunds(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(11) /*'(./index.rsh:41:24:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_totalAllocatedFunds = _svs.v4091;
    }
  function _reacha_Info_totalAmountClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(12) /*'(./index.rsh:40:23:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_totalAmountClaimed = _svs.v4090;
    }
  function _reacha_Info_totalClaimed(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(13) /*'(./index.rsh:38:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_totalClaimed = _svs.v4092;
    }
  function _reacha_Info_totalOptedIn(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(14) /*'(./index.rsh:39:17:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_Info_totalOptedIn = _svs.v4093;
    }
  struct _F12414 {
    T3 v12382;
    T6 v12383;
    }
  function _reacha_User_claim(uint256 _a, Memory memory _Memory) internal  {
    _F12414 memory _f;
    _f.v12382.elem0 = _a;
    _f.v12383.which = _enum_T6.User_claim0_98;
    _f.v12383._User_claim0_98 = _f.v12382;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12383;
    _reachi_2(_ja, _Memory);
    }
  struct _F12415 {
    bool v12387;
    T6 v12388;
    }
  function _reacha_User_claimAll(bool _a, Memory memory _Memory) internal  {
    _F12415 memory _f;
    _f.v12388.which = _enum_T6.User_claimAll0_98;
    _f.v12388._User_claimAll0_98 = _f.v12387;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12388;
    _reachi_2(_ja, _Memory);
    }
  struct _F12416 {
    bool v12391;
    T6 v12392;
    }
  function _reacha_User_optin(bool _a, Memory memory _Memory) internal  {
    _F12416 memory _f;
    _f.v12392.which = _enum_T6.User_optin0_98;
    _f.v12392._User_optin0_98 = _f.v12391;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v12392;
    _reachi_2(_ja, _Memory);
    }
  struct _F12417 {
    T8 v4059;
    T9 v4060;
    T12 v4061;
    }
  function _reachi_0(T11 memory _a, Memory memory _Memory) internal  {
    _F12417 memory _f;
    reachRequire((! locked), uint256(15) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(16) /*'time check at ./index.rsh:55:12:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./index.rsh:55:12:dot,[],"verify network token pay amount")'*/);
    _f.v4059._i = uint256(5);
    _f.v4059._scale = uint256(100);
    _f.v4060._i = _f.v4059;
    _f.v4060._sign = true;
    _f.v4061._bal = uint256(0);
    _f.v4061._keepGoing = true;
    _f.v4061._percent = _f.v4060;
    _f.v4061._total_amount_claimed = uint256(0);
    _f.v4061._total_rewards_allcoated = uint256(0);
    _f.v4061._total_users_claim = uint256(0);
    _f.v4061._usersNo = uint256(0);
    T13  memory _ja;
    _ja.elem0 = payable(msg.sender);
    _ja.elem1 = (_a.elem1);
    _ja.elem2 = _f.v4061;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = uint256(0);
    _reachl_1(_ja, _Memory);
    }
  struct _F12418 {
    T2 v4313;
    T12 v4407;
    T3 v4744;
    T12 v4864;
    T4 v5175;
    T12 v5326;
    T12 v5775;
    T2 v6037;
    T12 v6228;
    T4 v6468;
    bool v6510;
    uint256 v6515;
    uint256 v6692;
    T12 v6694;
    T3 v6899;
    T14 v7190;
    T12 v7210;
    T12 v7229;
    T0 v7388;
    uint256 v7389;
    uint256 v7674;
    T12 v7691;
    T14 v7703;
    T12 v7720;
    T12 v7742;
    T12 v8190;
    }
  function _reachi_2(T7 memory _a, Memory memory _Memory) internal  {
    _F12418 memory _f;
    reachRequire((current_step == uint256(3)), uint256(18) /*'state check at ./index.rsh:71:37:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(19) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(20) /*'time check at ./index.rsh:71:37:dot'*/);
    if ((_a.elem1).which == _enum_T6.Admin_addAdmin0_98) {
    _f.v4313 = (_a.elem1)._Admin_addAdmin0_98;
    reachRequire((((payable(msg.sender) == _svs.v4042) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(21) /*'(reach standard library:57:5:application,[at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:161:34:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:161:34:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "You Are unable to register another Admin")'*/);
    reachRequire((msg.value == uint256(0)), uint256(22) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    _reachm_1[(_f.v4313.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v4313.elem0)]._Some = false;
    
    emit _reach_oe_v4393( (false));
    _Memory._reachr_Admin_addAdmin = (false);
    _f.v4407._bal = _svs.v4087;
    _f.v4407._keepGoing = _svs.v4088;
    _f.v4407._percent = _svs.v4089;
    _f.v4407._total_amount_claimed = _svs.v4090;
    _f.v4407._total_rewards_allcoated = _svs.v4091;
    _f.v4407._total_users_claim = _svs.v4092;
    _f.v4407._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v4407;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v4066;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_deposit0_98) {
    _f.v4744 = (_a.elem1)._Admin_deposit0_98;
    reachRequire((((payable(msg.sender) == _svs.v4042) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(23) /*'(reach standard library:57:5:application,[at ./index.rsh:99:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:98:32:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:98:32:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((msg.value == (_f.v4744.elem0)), uint256(24) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v4849( (false));
    _Memory._reachr_Admin_deposit = (false);
    _f.v4864._bal = (safeAdd(_svs.v4087, (_f.v4744.elem0)));
    _f.v4864._keepGoing = _svs.v4088;
    _f.v4864._percent = _svs.v4089;
    _f.v4864._total_amount_claimed = _svs.v4090;
    _f.v4864._total_rewards_allcoated = _svs.v4091;
    _f.v4864._total_users_claim = _svs.v4092;
    _f.v4864._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v4864;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = (unsafeAdd(_svs.v4066, (_f.v4744.elem0)));
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_editUserReward0_98) {
    _f.v5175 = (_a.elem1)._Admin_editUserReward0_98;
    reachRequire((((payable(msg.sender) == _svs.v4042) ? true : ((uint256((__reachm_1Ref(payable(msg.sender))).which)) == uint256(1)))), uint256(25) /*'(reach standard library:57:5:application,[at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Only Admins can deposit")'*/);
    reachRequire((((_f.v5175.elem1) <= _svs.v4066)), uint256(26) /*'(reach standard library:57:5:application,[at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:149:45:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:149:45:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Can only edit what is in the contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(27) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    _reachm_0[(_f.v5175.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v5175.elem0)]._Some = (_f.v5175.elem1);
    
    emit _reach_oe_v5311( (false));
    _Memory._reachr_Admin_editUserReward = (false);
    _f.v5326._bal = _svs.v4087;
    _f.v5326._keepGoing = _svs.v4088;
    _f.v5326._percent = _svs.v4089;
    _f.v5326._total_amount_claimed = _svs.v4090;
    _f.v5326._total_rewards_allcoated = _svs.v4091;
    _f.v5326._total_users_claim = _svs.v4092;
    _f.v5326._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v5326;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v4066;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_endContractAndTransfer0_98) {
    reachRequire(((_svs.v4042 == payable(msg.sender))), uint256(28) /*'(reach standard library:57:5:application,[at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:277:44:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:277:44:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Cannot end contract without being Deployer")'*/);
    reachRequire((msg.value == uint256(0)), uint256(29) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v5762( (false));
    _Memory._reachr_Admin_endContractAndTransfer = (false);
    _f.v5775._bal = _svs.v4087;
    _f.v5775._keepGoing = false;
    _f.v5775._percent = _svs.v4089;
    _f.v5775._total_amount_claimed = _svs.v4090;
    _f.v5775._total_rewards_allcoated = _svs.v4091;
    _f.v5775._total_users_claim = _svs.v4092;
    _f.v5775._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v5775;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v4066;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_revokeAdmin0_98) {
    _f.v6037 = (_a.elem1)._Admin_revokeAdmin0_98;
    reachRequire(((payable(msg.sender) == _svs.v4042)), uint256(30) /*'(reach standard library:57:5:application,[at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:175:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:175:37:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Only the Deployer can revoke Admin Rights")'*/);
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    delete _reachm_1[(_f.v6037.elem0)];
    emit _reach_oe_v6214( (false));
    _Memory._reachr_Admin_revokeAdmin = (false);
    _f.v6228._bal = _svs.v4087;
    _f.v6228._keepGoing = _svs.v4088;
    _f.v6228._percent = _svs.v4089;
    _f.v6228._total_amount_claimed = _svs.v4090;
    _f.v6228._total_rewards_allcoated = _svs.v4091;
    _f.v6228._total_users_claim = _svs.v4092;
    _f.v6228._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v6228;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v4066;
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Admin_setReward0_98) {
    _f.v6468 = (_a.elem1)._Admin_setReward0_98;
    _f.v6510 = (_f.v6468.elem1) > _svs.v4087;
    reachRequire((((uint256((__reachm_3Ref((_f.v6468.elem0))).which)) == uint256(1))), uint256(32) /*'(reach standard library:57:5:application,[at ./index.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:111:40:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:111:40:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "The user needs to opt in first")'*/);
    _f.v6515 = _f.v6510 ? (_f.v6468.elem1) : uint256(0);
    reachRequire((msg.value == _f.v6515), uint256(33) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    _reachm_0[(_f.v6468.elem0)].which = _enum_T0.Some;
    _reachm_0[(_f.v6468.elem0)]._Some = (safeAdd((((__reachm_0Ref((_f.v6468.elem0))).which == _enum_T0.Some ? (__reachm_0Ref((_f.v6468.elem0)))._Some : uint256(0))), (_f.v6468.elem1)));
    
    emit _reach_oe_v6677( (true));
    _Memory._reachr_Admin_setReward = (true);
    if (_f.v6510) {
      _f.v6692 = (safeAdd(_svs.v4087, (_f.v6468.elem1)));
      }
    else {
      _f.v6692 = _svs.v4087;
      }
    _f.v6694._bal = _f.v6692;
    _f.v6694._keepGoing = _svs.v4088;
    _f.v6694._percent = _svs.v4089;
    _f.v6694._total_amount_claimed = _svs.v4090;
    _f.v6694._total_rewards_allcoated = _svs.v4091;
    _f.v6694._total_users_claim = _svs.v4092;
    _f.v6694._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v6694;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = (unsafeAdd(_svs.v4066, _f.v6515));
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.User_claim0_98) {
    _f.v6899 = (_a.elem1)._User_claim0_98;
    reachRequire((((_f.v6899.elem0) <= _svs.v4066)), uint256(34) /*'(reach standard library:57:5:application,[at ./index.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Cannot withdraw less than balance")'*/);
    reachRequire((((((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.Some ? (__reachm_0Ref(payable(msg.sender)))._Some : uint256(0))) >= (_f.v6899.elem0))), uint256(35) /*'(reach standard library:57:5:application,[at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:234:29:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:234:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Cannot withdraw less than allocated")'*/);
    reachRequire((msg.value == uint256(0)), uint256(36) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v7183( (true));
    _Memory._reachr_User_claim = (true);
    _f.v7190.addr = payable(msg.sender);
    _f.v7190.amount = (_f.v6899.elem0);
    _f.v7190.projectName = _svs.v4043;
    emit claimed( _f.v7190);
    if (((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1))) {
      payable(msg.sender).transfer((_f.v6899.elem0));
      delete _reachm_0[payable(msg.sender)];
      _f.v7229._bal = (safeSub(_svs.v4087, (_f.v6899.elem0)));
      _f.v7229._keepGoing = _svs.v4088;
      _f.v7229._percent = _svs.v4089;
      _f.v7229._total_amount_claimed = (safeAdd(_svs.v4090, (_f.v6899.elem0)));
      _f.v7229._total_rewards_allcoated = _svs.v4091;
      _f.v7229._total_users_claim = (safeAdd(_svs.v4092, uint256(1)));
      _f.v7229._usersNo = (safeAdd(_svs.v4093, uint256(1)));
      T13  memory _ja;
      _ja.elem0 = _svs.v4042;
      _ja.elem1 = _svs.v4043;
      _ja.elem2 = _f.v7229;
      _ja.elem3 = uint256(block.number);
      _ja.elem4 = (unsafeSub(_svs.v4066, (_f.v6899.elem0)));
      _reachl_1(_ja, _Memory);
      }
    else {
      _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_2[payable(msg.sender)]._Some = false;
      
      payable(msg.sender).transfer((_f.v6899.elem0));
      delete _reachm_0[payable(msg.sender)];
      _f.v7210._bal = (safeSub(_svs.v4087, (_f.v6899.elem0)));
      _f.v7210._keepGoing = _svs.v4088;
      _f.v7210._percent = _svs.v4089;
      _f.v7210._total_amount_claimed = (safeAdd(_svs.v4090, (_f.v6899.elem0)));
      _f.v7210._total_rewards_allcoated = _svs.v4091;
      _f.v7210._total_users_claim = (safeAdd(_svs.v4092, uint256(1)));
      _f.v7210._usersNo = _svs.v4093;
      T13  memory _ja;
      _ja.elem0 = _svs.v4042;
      _ja.elem1 = _svs.v4043;
      _ja.elem2 = _f.v7210;
      _ja.elem3 = uint256(block.number);
      _ja.elem4 = (unsafeSub(_svs.v4066, (_f.v6899.elem0)));
      _reachl_1(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T6.User_claimAll0_98) {
    _f.v7388 = __reachm_0Ref(payable(msg.sender));
    _f.v7389 = (_f.v7388.which == _enum_T0.Some ? _f.v7388._Some : uint256(0));
    reachRequire((((uint256(_f.v7388.which)) == uint256(1))), uint256(37) /*'(reach standard library:57:5:application,[at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Cannot claim because you have not earned reward")'*/);
    reachRequire(((_f.v7389 <= _svs.v4066)), uint256(38) /*'(reach standard library:57:5:application,[at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:186:29:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:186:29:function exp),at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)],Just "Cannot claim more than the balance in the contract")'*/);
    reachRequire((msg.value == uint256(0)), uint256(39) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    _f.v7674 = (_svs.v4066 > _f.v7389) ? _f.v7389 : _svs.v4066;
    if ((_f.v7389 >= _svs.v4066)) {
      emit insufficient( _f.v7389);
      emit _reach_oe_v7677( (false));
      _Memory._reachr_User_claimAll = (false);
      _f.v7691._bal = _svs.v4087;
      _f.v7691._keepGoing = _svs.v4088;
      _f.v7691._percent = _svs.v4089;
      _f.v7691._total_amount_claimed = _svs.v4090;
      _f.v7691._total_rewards_allcoated = _svs.v4091;
      _f.v7691._total_users_claim = _svs.v4092;
      _f.v7691._usersNo = (safeAdd(_svs.v4093, uint256(1)));
      T13  memory _ja;
      _ja.elem0 = _svs.v4042;
      _ja.elem1 = _svs.v4043;
      _ja.elem2 = _f.v7691;
      _ja.elem3 = uint256(block.number);
      _ja.elem4 = _svs.v4066;
      _reachl_1(_ja, _Memory);
      }
    else {
      if (((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1))) {
        emit _reach_oe_v7722( (true));
        _Memory._reachr_User_claimAll = (true);
        payable(msg.sender).transfer(_f.v7674);
        delete _reachm_0[payable(msg.sender)];
        _f.v7742._bal = (safeSub(_svs.v4087, _f.v7674));
        _f.v7742._keepGoing = _svs.v4088;
        _f.v7742._percent = _svs.v4089;
        _f.v7742._total_amount_claimed = (safeAdd(_svs.v4090, _f.v7674));
        _f.v7742._total_rewards_allcoated = _svs.v4091;
        _f.v7742._total_users_claim = (safeAdd(_svs.v4092, uint256(1)));
        _f.v7742._usersNo = _svs.v4093;
        T13  memory _ja;
        _ja.elem0 = _svs.v4042;
        _ja.elem1 = _svs.v4043;
        _ja.elem2 = _f.v7742;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = (unsafeSub(_svs.v4066, _f.v7674));
        _reachl_1(_ja, _Memory);
        }
      else {
        emit _reach_oe_v7697( (true));
        _Memory._reachr_User_claimAll = (true);
        _f.v7703.addr = payable(msg.sender);
        _f.v7703.amount = _f.v7674;
        _f.v7703.projectName = _svs.v4043;
        emit claimed( _f.v7703);
        _reachm_2[payable(msg.sender)].which = _enum_T1.Some;
        _reachm_2[payable(msg.sender)]._Some = false;
        
        payable(msg.sender).transfer(_f.v7674);
        delete _reachm_0[payable(msg.sender)];
        _f.v7720._bal = (safeSub(_svs.v4087, _f.v7674));
        _f.v7720._keepGoing = _svs.v4088;
        _f.v7720._percent = _svs.v4089;
        _f.v7720._total_amount_claimed = (safeAdd(_svs.v4090, _f.v7674));
        _f.v7720._total_rewards_allcoated = _svs.v4091;
        _f.v7720._total_users_claim = (safeAdd(_svs.v4092, uint256(1)));
        _f.v7720._usersNo = (safeAdd(_svs.v4093, uint256(1)));
        T13  memory _ja;
        _ja.elem0 = _svs.v4042;
        _ja.elem1 = _svs.v4043;
        _ja.elem2 = _f.v7720;
        _ja.elem3 = uint256(block.number);
        _ja.elem4 = (unsafeSub(_svs.v4066, _f.v7674));
        _reachl_1(_ja, _Memory);
        }
      }
    } else if ((_a.elem1).which == _enum_T6.User_optin0_98) {
    reachRequire((msg.value == uint256(0)), uint256(40) /*'(./index.rsh:71:37:dot,[],"verify network token pay amount")'*/);
    _reachm_3[payable(msg.sender)].which = _enum_T1.Some;
    _reachm_3[payable(msg.sender)]._Some = false;
    
    emit _reach_oe_v8177( (false));
    _Memory._reachr_User_optin = (false);
    _f.v8190._bal = _svs.v4087;
    _f.v8190._keepGoing = _svs.v4088;
    _f.v8190._percent = _svs.v4089;
    _f.v8190._total_amount_claimed = _svs.v4090;
    _f.v8190._total_rewards_allcoated = _svs.v4091;
    _f.v8190._total_users_claim = _svs.v4092;
    _f.v8190._usersNo = _svs.v4093;
    T13  memory _ja;
    _ja.elem0 = _svs.v4042;
    _ja.elem1 = _svs.v4043;
    _ja.elem2 = _f.v8190;
    _ja.elem3 = uint256(block.number);
    _ja.elem4 = _svs.v4066;
    _reachl_1(_ja, _Memory);
    }
    }
  struct _F12420 {
    uint256 v8206;
    }
  function _reachl_1(T13 memory _a, Memory memory _Memory) internal  {
    _F12420 memory _f;
    if ((_a.elem2._keepGoing)) {
      T10 memory nsvs;
      nsvs.v4042 = _a.elem0;
      nsvs.v4043 = _a.elem1;
      nsvs.v4066 = _a.elem4;
      nsvs.v4087 = (_a.elem2._bal);
      nsvs.v4088 = (_a.elem2._keepGoing);
      nsvs.v4089 = (_a.elem2._percent);
      nsvs.v4090 = (_a.elem2._total_amount_claimed);
      nsvs.v4091 = (_a.elem2._total_rewards_allcoated);
      nsvs.v4092 = (_a.elem2._total_users_claim);
      nsvs.v4093 = (_a.elem2._usersNo);
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem0.transfer(_a.elem4);
      {
        uint256 v12419 = address(this).balance;
        _f.v8206 = v12419 < (unsafeSub(_a.elem4, _a.elem4)) ? uint256(0) : unsafeSub(v12419, (unsafeSub(_a.elem4, _a.elem4)));
        }
      _a.elem0.transfer(_f.v8206);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function Admin_addAdmin(address payable v12347) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_addAdmin(v12347, _Memory);
    return _Memory._reachr_Admin_addAdmin;
    }
  function Admin_deposit(uint256 v12353) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_deposit(v12353, _Memory);
    return _Memory._reachr_Admin_deposit;
    }
  function Admin_editUserReward(address payable v12360, uint256 v12361) external payable returns (bool) {
    Memory memory _Memory;
    T4  memory _ja;
    _ja.elem0 = v12360;
    _ja.elem1 = v12361;
    _reacha_Admin_editUserReward(_ja, _Memory);
    return _Memory._reachr_Admin_editUserReward;
    }
  function Admin_endContractAndTransfer() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Admin_endContractAndTransfer(_ja, _Memory);
    return _Memory._reachr_Admin_endContractAndTransfer;
    }
  function Admin_revokeAdmin(address payable v12371) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_revokeAdmin(v12371, _Memory);
    return _Memory._reachr_Admin_revokeAdmin;
    }
  function Admin_setReward(address payable v12378, uint256 v12379) external payable returns (bool) {
    Memory memory _Memory;
    T4  memory _ja;
    _ja.elem0 = v12378;
    _ja.elem1 = v12379;
    _reacha_Admin_setReward(_ja, _Memory);
    return _Memory._reachr_Admin_setReward;
    }
  function Info_Admins(address payable v12323) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_Admins(v12323, _Memory);
    return _Memory._reachr_Info_Admins;
    }
  function Info_balance() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_balance(_ja, _Memory);
    return _Memory._reachr_Info_balance;
    }
  function Info_opted(address payable v12329) external view returns (bool) {
    Memory memory _Memory;
    _reacha_Info_opted(v12329, _Memory);
    return _Memory._reachr_Info_opted;
    }
  function Info_rewards(address payable v12333) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_Info_rewards(v12333, _Memory);
    return _Memory._reachr_Info_rewards;
    }
  function Info_totalAllocatedFunds() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAllocatedFunds(_ja, _Memory);
    return _Memory._reachr_Info_totalAllocatedFunds;
    }
  function Info_totalAmountClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalAmountClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalAmountClaimed;
    }
  function Info_totalClaimed() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalClaimed(_ja, _Memory);
    return _Memory._reachr_Info_totalClaimed;
    }
  function Info_totalOptedIn() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Info_totalOptedIn(_ja, _Memory);
    return _Memory._reachr_Info_totalOptedIn;
    }
  function User_claim(uint256 v12385) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_User_claim(v12385, _Memory);
    return _Memory._reachr_User_claim;
    }
  function User_claimAll() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_claimAll(_ja, _Memory);
    return _Memory._reachr_User_claimAll;
    }
  function User_optin() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_User_optin(_ja, _Memory);
    return _Memory._reachr_User_optin;
    }
  constructor(T11 memory v12396) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v12396, _Memory);
    }
  function _reachp_2(T7 calldata v12399) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v12399, _Memory);
    }
  }
